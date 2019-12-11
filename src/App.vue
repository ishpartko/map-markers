<template>
  <div class="app">
    <template v-if="isEdit">
      <CreateMapTree @back="onClickBack"></CreateMapTree>
    </template>
    <template v-else>
      <MapTree class="app-map-tree"></MapTree>
      <Map :markers-type="markersType" class="app-map"></Map>
      <SavedMapTree class="saved-map-tree"></SavedMapTree>
    </template>
    <MenuPanel
      :is-map-edit="isEdit"
      @on-toggle-edit="toggleEdit"
      @on-change-markers-type="changeMarkersType"
    ></MenuPanel>
  </div>
</template>

<script>
import CreateMapTree from "./components/CreateMapTree.vue";
import Map from "./components/Map.vue";
import MapTree from "./components/MapTree.vue";
import SavedMapTree from "./components/SavedMapTree.vue";
import MenuPanel from "./components/MenuPanel.vue";
import { mapGetters } from "vuex";
import {
  writePlacesInLocalStorage,
  readPlacesFromLocalStorage
} from "@/helpers";
import { markersTypeNames } from "@/helpers/radio";
import { setFirstTimePlaceholderData } from "@/helpers/firstTimePlaceholderData";

export default {
  name: "App",
  components: {
    Map,
    MapTree,
    SavedMapTree,
    CreateMapTree,
    MenuPanel
  },
  data() {
    return {
      isEdit: true,
      markersType: markersTypeNames.default.value
    };
  },
  computed: {
    ...mapGetters({
      places: "places"
    })
  },
  watch: {
    places() {
      this.isEdit = false;
    }
  },
  created() {
    setFirstTimePlaceholderData();
    this.init();
  },
  methods: {
    init() {
      const placesFromLocalStorage = readPlacesFromLocalStorage();
      if (placesFromLocalStorage) {
        this.$store.commit("places", placesFromLocalStorage);
      }
      this.isEdit = Object.keys(this.places).length === 0;
    },
    onClickBack() {
      writePlacesInLocalStorage(this.places);
      this.isEdit = false;
    },
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    changeMarkersType(value) {
      this.markersType = value;
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
  height: 60vh;
}

.saved-map-tree {
  max-height: 100vh;
  overflow-y: scroll;
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
    max-height: auto;
    overflow-y: auto;
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
