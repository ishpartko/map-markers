<template>
  <div class="app">
    <MapTree></MapTree>
    <Map></Map>
    <SavedMapTree></SavedMapTree>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import MapTree from './components/MapTree.vue'
import SavedMapTree from './components/SavedMapTree.vue'

export default {
  name: 'app',
  components: {
    Map,
    MapTree,
    SavedMapTree
  }
}
</script>

<style>
.app {
  display: flex;
  justify-content: space-between;
}
</style>
