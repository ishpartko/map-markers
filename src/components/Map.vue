<template>
  <div 
  class="map"
  ref="map"></div>
</template>

<script>
import {
  tileLayer, 
  map,
  marker
} from '@/lib/leaflet'
import { mapToken } from '@/config'
import 'leaflet/dist/leaflet.css'

const defaults = {
  position: [51.505, -0.09],
  zoom: 13,
  id: 'mapbox/streets-v11'
} 

export default {
  data() {
    return {
      mainMap: null
    }
  },
  mounted() {
    
    this.mainMap = map(this.$refs.map, {
      center: defaults.position,
      zoom: defaults.zoom
    });
    
    tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      id: defaults.id,
      accessToken: mapToken
    }).addTo(this.mainMap);

    this.mainMap.on('click', defaults.id, (e) => {
      // eslint-disable-next-line no-console
      console.log(e);
    });

    marker(defaults.position).addTo(this.mainMap).on('mouseover', (e) => {
      // eslint-disable-next-line no-console
      console.log(e.latlng);
    });
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