<template>
  <div class="app">
    <CreateMapTree></CreateMapTree>
    <template v-if="false">
      <MapTree class="app-map-tree"></MapTree>
      <Map class="app-map"></Map>
      <SavedMapTree class="saved-map-tree"></SavedMapTree>
    </template>
  </div>
</template>

<script>
import CreateMapTree from "./components/CreateMapTree.vue";
import Map from "./components/Map.vue";
import MapTree from "./components/MapTree.vue";
import SavedMapTree from "./components/SavedMapTree.vue";

export default {
  name: "app",
  components: {
    Map,
    MapTree,
    SavedMapTree,
    CreateMapTree
  }
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
}

.app-map {
  height: 70vh;
}

@media (min-width: 700px) {
  :root {
    --tree-width: 400px;
  }

  .app {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    flex-direction: row;
  }

  .app-map-tree {
    flex-grow: 1;
    flex-basis: var(--tree-width);
  }

  .app-map {
    flex-grow: 2;
  }

  .saved-map-tree {
    flex-grow: 1;
    flex-basis: var(--tree-width);
  }
}
</style>
