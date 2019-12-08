<template>
  <section class="menu-panel">
    <button @click="toggleEdit">
      {{editButtonText}}
    </button>
    <span v-if="!isMapEdit">
      Управление маркерами:
      <select 
        v-model="markersType"
      >
        <option 
          v-for="(markersTypesName, key) in markersTypeNames"
          :key="key"
          :value="markersTypesName.value"
        >
          {{markersTypesName.title}}
        </option>
      </select>
    </span>
  </section>
</template>

<script>
import {markersTypeNames} from '@/helpers/radio'

export default {
  props: {
    isMapEdit: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      markersTypeData: markersTypeNames.default.value
    }
  },  
  computed: {
    markersTypeNames() {
      return markersTypeNames
    },
    editButtonText() {
      return this.isMapEdit ? 'Вернуться к дереву' : 'Задать точки' 
    },
    markersType: {
      get() {
        return this.markersTypeData
      },
      set(value) {
        this.markersTypeData = value
        this.$emit('on-change-markers-type', value)
      }
    }
  },
  methods: {
    toggleEdit() {
      this.$emit('on-toggle-edit')
    }
  }
}
</script>

<style scoped>
.menu-panel {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color:red;
  z-index: 10000;
  opacity: 0.6;
  color: white;
}
.menu-panel:hover {
  opacity: 1;
}
</style>