<template>
  <div class="app">
    <template v-if="isShowEdit">
      <CreateMapTree @back="onClickBack">
        <button @click="onClickBack">
          Вернуться к дереву
        </button>
      </CreateMapTree>
    </template>
    <template v-else>
      <MapTree class="app-map-tree">
        <button @click="onClickEdit">
          Задать точки
        </button>
      </MapTree>
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
import {mapGetters } from 'vuex'
import {
  writePlacesInLocalStorage,
  readPlacesFromLocalStorage
} from '@/helpers'

export default {
  name: "app",
  components: {
    Map,
    MapTree,
    SavedMapTree,
    CreateMapTree
  },
  computed: {
    ...mapGetters({
      places: 'places'
    }),
    isShowEdit() {
      return this.isEdit
    }
  },
  data() {
    return {
      isEdit: true
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
    onClickEdit() {
      this.isEdit = true
    },
    onClickBack() {
      writePlacesInLocalStorage(this.places)
      this.isEdit = false
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
