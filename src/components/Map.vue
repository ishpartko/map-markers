<template>
  <div 
  class="map"
  ref="map"></div>
</template>

<script>
import {mapGetters} from 'vuex'
import Vue from 'vue'
import {
  tileLayer, 
  map,
  marker
} from '@/lib/leaflet'
import { mapToken } from '@/config'
import 'leaflet/dist/leaflet.css'
import {has} from 'lodash-es'
import {defaultView} from '@/helpers/map'
import { getPlaceContextFromFullApiContext } from '@/helpers/place'

export default {
  data() {
    return {
      mainMap: null,
      markerIdsOnMap: {}
    }
  },
  computed: {
    ...mapGetters({
      mapMarkers: 'mapMarkers',
      places: 'places'
    })
  },
  watch: {
    mapMarkers(newValue) {
      if(newValue === null) return;
      newValue.forEach(place => {
        this.addMarker(place)
      });
    }
  },
  mounted() {
    this.mainMap = map(this.$refs.map, {
      center: defaultView.position,
      zoom: defaultView.zoom
    });

    this.mainMap.on('contextmenu', ()=> {})

    tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      id: defaultView.id,
      accessToken: mapToken
    }).addTo(this.mainMap);
  },
  methods: {
    addMarker(place) {
      if(has(this.markerIdsOnMap, place.id)) return;
      const markerConfig = {
        draggable:'true',
        id: place.id
      }
      this.markerIdsOnMap[place.id] = marker(place.position, markerConfig)
      this.markerIdsOnMap[place.id].on('click', () => {
        this.$store.commit('saveMapMarker', place)
        this.mainMap.removeLayer(this.markerIdsOnMap[place.id]);
        Vue.delete(this.markerIdsOnMap, place.id)
      });
      this.markerIdsOnMap[place.id].on('dragend', (event)=> {
        const marker = event.target;
        const position = marker.getLatLng();
        marker.setLatLng(position, markerConfig)
        marker.bindPopup(position)
        marker.update();
        const updatedPlaceSync = {
          ...this.places[place.id],
          position
        }
        this.$store.dispatch('getPlaceContextFromApi', updatedPlaceSync).then((fullContext)=> {
          const context = getPlaceContextFromFullApiContext(fullContext)
          const updatedPlaceAsync = {
            ...updatedPlaceSync,
            context
          }
          this.$store.commit('updateSinglePlace', updatedPlaceAsync)
        })
      })
      this.markerIdsOnMap[place.id].addTo(this.mainMap)
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>

<style>

</style>