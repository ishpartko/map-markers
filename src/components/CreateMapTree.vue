<template>
  <div>
    <div class="map" ref="map"></div>
    <button @click="onClickSave">
      Сохранить маркеры в дерево
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import { tileLayer, map, marker } from "@/lib/leaflet"
import nanoid from 'nanoid/generate'
import "leaflet/dist/leaflet.css"
import { has } from 'lodash-es'
import { mapToken } from "@/config"
import { getPlace } from "@/helpers/place"
import {defaultView} from '@/helpers/map'

export default {
  data() {
    return {
      mainMap: null,
      points: {}
    };
  },
  mounted() {
    this.mainMap = map(this.$refs.map, {
      center: defaultView.position,
      zoom: defaultView.zoom
    });

    tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution: "",
        maxZoom: 18,
        minZoom: 4,
        id: defaultView.id,
        accessToken: mapToken
      }
    ).addTo(this.mainMap);

    this.mainMap.on("click", e => {
      this.addPoint(e.latlng);
    });
  },
  methods: {
    getNewId() {
      return nanoid('1234567890abcdefghigklmno', 4)
    },
    addPoint(position) {
      const point = {
        id: this.getNewId(), 
        position: position,
      }

      Vue.set(this.points, point.id, point)

      const newMarker = marker(position).addTo(this.mainMap)
      
      newMarker.on("click", () => {
        this.mainMap.removeLayer(newMarker)
        
        const contain = has(this.points, point.id)
        if(contain) {
          Vue.delete(this.points, point.id)
        }
      });
    },
    createPlacesFromApi() {
      return new Promise((resolve)=> {
        const allPromises = Object.values(this.points).map((point)=> {
          return new Promise((resolve, reject)=> {
           this.$store.dispatch('getPlaceContextFromApi', point).then((fullContext)=> {
              resolve(getPlace(point, fullContext))
            }).catch((err)=> {
              reject(err)
            })
          }) 
        })
        Promise.all(allPromises).then((result)=> {
          const resultObject = {}
          result.forEach((point)=> {
            resultObject[point.id] = point
          })
          resolve(resultObject)
        })
      })
    },
    onClickSave() {
      this.createPlacesFromApi().then((placesWithContext)=> {
        this.$store.commit('places', placesWithContext)
        this.$emit('back')
      })
    }
  }
};
</script>

<style scoped>
.map {
  width: 100vw;
  height: 80vh;
}
</style>