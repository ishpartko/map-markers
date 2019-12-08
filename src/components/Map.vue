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
import {get, has} from 'lodash-es'
import {defaultView} from '@/helpers/map'
import { getPlaceContextFromFullApiContext } from '@/helpers/place'
import {markersTypeNames} from '@/helpers/radio'

export default {
  props: {
    markersType: {
      type: [String, Number],
      required: true,
      validator(value) {
        return Object.values(markersTypeNames).some((markersType) => {
          return markersType.value === value
        })
      }
    }
  },
  data() {
    return {
      mainMap: null,
      markersOnMap: {}
    }
  },
  computed: {
    ...mapGetters({
      mapMarkers: 'mapMarkers',
      places: 'places'
    }),
    onSelectListeners() {
      switch(this.markersType) {
        case markersTypeNames.allowDrag.value:
          return 'click'
        case markersTypeNames.default.value:
        default:
          return 'mouseover click'
      }
    }
  },
  watch: {
    mapMarkers(newValue) {
      if(newValue === null) return;
      newValue.forEach(place => {
        this.addMarker(place)
      });
    },
    markersType(type) {
      this.changeMarkersType(type)
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
    changeMarkerType(id) {
      this.updateMarkerListeners({id})
    },
    changeMarkersType() {
      Object.keys(this.markersOnMap).forEach((key)=> {
        this.changeMarkerType(key)
      })
    },
    deleteMarker({id}) {
      this.mainMap.removeLayer(this.markersOnMap[id]);
      Vue.delete(this.markersOnMap, id)
    },
    updateMarkerListeners({id}) {
      this.markersOnMap[id].clearAllEventListeners()

      this.markersOnMap[id].on(this.onSelectListeners, (event) => {
        const id = get(event.target, 'options.id', null);
        this.$store.commit('saveMapMarker', {id})
        this.deleteMarker({id})
      });
      if(this.markersType === markersTypeNames.allowDrag.value) {
        this.markersOnMap[id].on('dragend', (event)=> {
          const marker = event.target;
          const id = get(marker, 'options.id', null)
          const position = marker.getLatLng();
          marker.setLatLng(position, {id, draggable:'true'})
          marker.bindPopup(position)
          marker.update();
          const updatedPlaceSync = {
            ...this.places[id],
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
      }
    },
    addMarker(place) {
      if(has(this.markersOnMap, place.id)) return;

      this.markersOnMap[place.id] = marker(place.position, {
        draggable:'true',
        id: place.id
      })
      
      this.updateMarkerListeners({id: place.id})
      
      this.markersOnMap[place.id].addTo(this.mainMap)
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