<template>
  <div>
    <div class="map" ref="map"></div>
    <button @click="saveAndEmit">
      Сохранить маркеры в дерево
    </button>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { tileLayer, map, marker } from "@/lib/leaflet";
import Axios from 'axios'
import { mapToken } from "@/config";
import nanoid from 'nanoid'
import "leaflet/dist/leaflet.css";
import { get, merge } from 'lodash-es'

const defaults = {
  position: [51.505, -0.09],
  zoom: 3,
  id: "mapbox/streets-v11"
};

const maxDeepSize = 3

export default {
  data() {
    return {
      mainMap: null,
      places: []
    };
  },
  mounted() {
    this.mainMap = map(this.$refs.map, {
      center: defaults.position,
      zoom: defaults.zoom
    });

    tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution: "",
        maxZoom: 18,
        id: defaults.id,
        accessToken: mapToken
      }
    ).addTo(this.mainMap);

    this.mainMap.on("click", e => {
      this.addPlace(e.latlng);
    });

   
  },
  methods: {
    addPlace(position) {
      const place = {
        id: nanoid(), 
        position: position,
      }
      this.places.push(place)

      const newMarker = marker(position).addTo(this.mainMap)
      
      newMarker.on("click", () => {
        this.mainMap.removeLayer(newMarker)
        
        const index = this.places.findIndex((value) => value.id === place.id)
        if(index === -1) return;

        this.places.splice(index, 1)
      });
    },
    requestPlacesNames() {
      return new Promise((resolve)=> {
        const allPromises = this.places.map((place)=> {
          return new Promise((resolve, reject)=> {
            Axios.get(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${place.position.lng},${place.position.lat}.json`,
              {
                params: {
                  access_token: mapToken
                }
              }
            ).then((response)=> {
              const context = get(response, 'data.features[0].context', [])
                              .reverse()
                              .slice(0, maxDeepSize)
              resolve({
                title: get(context, '[0].text', 'Нет Страны'),
                children: [
                  {
                    title: get(context, '[1].text', 'Нет Области'),
                    children: {
                      title: get(context, '[2].text', 'Нет Города'),
                      position: place.position
                    }
                  }
                ]
              })
            }).catch((err)=> {
              reject(err)
            })
          }) 
        })
        Promise.all(allPromises).then((result)=> resolve(result))
      })
    },
    deepMerge(target, other) {
      if(target.title === other.title) {
        return {
          title: target.title,
          children: target.children.reduce((result, item)=> {
            const index = result.findIndex((value)=> value.title === item.title)
            if(index > -1){
              const outcome = [...result]
              const itm = result[index]
              outcome.splice(index, 1)
              return [...outcome, merge(itm, item)]
            } else {
              return [...result, item]
            }
          }, other.children)
        }
      }
      return [target, other]
    },
    mergePlaces(places) {
      return places.reduce((result, place)=> {
        const index = result.findIndex((value)=> value.title === place.title)
        if(index === -1) {
          return [...result, place]
        } else {
          const outcome = [...result]
          const item = result[index]
          outcome.splice(index, 1)
          return [...outcome, this.deepMerge(item, place)]
        }
      }, [])
    },
    saveAndEmit() {
      this.requestPlacesNames().then((placesWithContext)=> {
        console.log('placesWithContext',[...placesWithContext])
        const merged = this.mergePlaces(placesWithContext)
        console.log(merged)
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