<template>
  <div class="app">
    <MenuPanel
      :is-map-edit="isEdit"
      @on-toggle-edit="toggleEdit"
      @on-change-markers-type="changeMarkersType"
    ></MenuPanel>
    <template v-if="isEdit">
      <CreateMapTree @back="onClickBack"></CreateMapTree>
    </template>
    <template v-else>
      <MapTree class="app-map-tree"></MapTree>
      <Map
        :markers-type="markersType"
        class="app-map"
      ></Map>
      <SavedMapTree class="saved-map-tree"></SavedMapTree>
    </template>
  </div>
</template>

<script>
import CreateMapTree from "./components/CreateMapTree.vue";
import Map from "./components/Map.vue";
import MapTree from "./components/MapTree.vue";
import SavedMapTree from "./components/SavedMapTree.vue";
import MenuPanel from "./components/MenuPanel.vue";
import {mapGetters } from 'vuex'
import {
  writePlacesInLocalStorage,
  readPlacesFromLocalStorage
} from '@/helpers'
import {markersTypeNames} from '@/helpers/radio'

export default {
  name: "app",
  components: {
    Map,
    MapTree,
    SavedMapTree,
    CreateMapTree,
    MenuPanel
  },
  computed: {
    ...mapGetters({
      places: 'places'
    }),
  },
  data() {
    return {
      isEdit: true,
      markersType: markersTypeNames.default.value,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const placesFromLocalStorage = readPlacesFromLocalStorage()
      if(placesFromLocalStorage) {
        this.$store.commit('places', placesFromLocalStorage)
      }
      this.isEdit = Object.keys(this.places).length === 0
    },
    onClickBack() {
      writePlacesInLocalStorage(this.places)
      this.isEdit = false
    },
    toggleEdit() {
      this.isEdit = !this.isEdit
    },
    changeMarkersType(value) {
      this.markersType = value
    }
  },
  watch: {
    places() {
      this.isEdit = false
    }
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
  .app {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    flex-direction: row;
  }

  .app-map-tree {
    flex-grow: 2;
    flex-basis: var(--tree-width);
  }

  .app-map {
    flex-grow: 7;
    height: 100vh;
  }

  .saved-map-tree {
    flex-grow: 2;
    flex-basis: var(--tree-width);
  }
}
</style>

<style>
:root {
  --tree-width: 600px;
}

* {
  margin: 0;
  padding: 0;
}
</style>
