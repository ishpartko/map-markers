<template>
  <div class="map-tree-wrapper">
    <slot></slot>
    <ul v-if="tree" class="map-tree">
      <TreeListItem
        v-for="(place, key) in tree"
        :key="key"
        :place="place"
        @selected="onSelected"
      ></TreeListItem>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TreeListItem from "./TreeListItem.vue";
import { merge } from "lodash-es";
export default {
  components: {
    TreeListItem
  },
  computed: {
    ...mapGetters({
      places: "places"
    }),
    tree() {
      return this.createTreeFromPlaces(this.places);
    }
  },
  methods: {
    onSelected(treeItem) {
      this.$store.commit("addMapMarkers", treeItem);
    },
    getHashCode(str) {
      var hash = 0,
        i,
        chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash;
    },
    createTreeItem(place) {
      return {
        [this.getHashCode(place.context.countryName)]: {
          title: place.context.countryName,
          children: {
            [this.getHashCode(place.context.regionName)]: {
              title: place.context.regionName,
              children: {
                [this.getHashCode(place.context.cityName)]: place
              }
            }
          }
        }
      };
    },
    createTreeFromPlaces(places) {
      return Object.values(places).reduce((result, place) => {
        const treeItem = this.createTreeItem({...place});
        return merge(treeItem, result);
      }, {});
    }
  }
};
</script>

<style>
.map-tree-wrapper {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.map-tree {
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.map-tree ul {
  list-style-type: none;
}
</style>