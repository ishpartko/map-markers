<template>
  <ul>
    <li v-if="savedPlaces.length === 0">
      Нет сохранённых мест
    </li>
    <li
      v-for="place in savedPlaces"
      :key="place.id"
      class="saved-list-item"
      @click="onClickDelete(place)"
    >
      {{
        `${place.context.countryName} => ${place.context.regionName} => ${place.context.cityName}`
      }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      savedPlaces: "savedPlaces"
    })
  },
  methods: {
    onClickDelete(place) {
      this.$store.commit("unSaveMapMarker", place);
    }
  }
};
</script>

<style>
.saved-list-item {
  padding: 5px 10px;
  border: 1px solid #000;
  cursor: pointer;
}
.saved-list-item:hover {
  background-color: rgba(255, 0, 0, 0.664);
}
</style>
