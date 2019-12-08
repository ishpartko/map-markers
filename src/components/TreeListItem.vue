<template>
  <li 
    class="tree-list-item" 
    v-if="place"
    @click.stop="onSelected(place)"
  >
    <span 
      :class="{
        'tree-list-item_selected': isNeedToHightlight
      }"
      class="tree-list-item-title"
    >
      {{placeTitle}}
    </span>
    <ul
      v-if="place.children"
    >
      <TreeListItem 
        v-for="(childPlace, key) in place.children" :key="key"
        :place="childPlace"
        @selected="onSelected"
      />
    </ul>
  </li>
</template>

<script>
import { Place } from '@/models'
import { get } from 'lodash-es'

export default {
  name: 'TreeListItem',
  props: {
    place: {
      type: Object,
      required: true,
      validator(value) {
        return Place.isValid(value)
      }
    }
  },
  computed: {
    placeTitle() {
      return get(this.place, 'title', false) || get(this.place, 'context[2]', false)
    },
    isNeedToHightlight() {
      return get(this.place, 'isSaved', false) || get(this.place, 'isShowOnMap', false)
    }
  },
  methods: {
    onSelected(treeItem) {
      this.$emit('selected', treeItem)
    }
  }
}
</script>

<style scoped>
  .tree-list-item {
    padding: 5px 10px;
    border: 1px solid #000;
    cursor: pointer;
  }

  .tree-list-item_selected {
    background-color: rgba(255, 179, 0, 0.66);
  }

</style>