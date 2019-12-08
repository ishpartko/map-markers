<template>
  <div 
    class="menu-panel-wrapper"
    :class="{
      'menu-panel-wrapper_active': isShowMenu
    }"
  >
    <button 
      @click="isShowMenu = !isShowMenu"
    >
      Показать/Спрятать меню
    </button>
    <section 
    v-if="isShowMenu" 
    class="menu-panel"
    >
      <button @click="toggleEdit"
        class="menu-panel-controll menu-panel-button"
      >
        {{editButtonText}}
      </button>
      <span 
        v-if="!isMapEdit"
        class="menu-panel-controll"
      >
        Управление маркерами:
        <select 
          class="menu-panel-controll-select"
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
  </div>
  
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
      markersTypeData: markersTypeNames.default.value,
      isShowMenu: false,
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
.menu-panel-wrapper {
  border-radius: 27px;
  font-size: 12px;
  padding: 6px;
  background-color:red;
  color: white;
  z-index: 10000;
  bottom: 0;
  right: 0;
  left: unset;
  position: sticky;
}

.menu-panel-wrapper_active {
  left: 0;
}

.menu-panel {
  opacity: 0.6;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.menu-panel:hover {
  opacity: 1;
}

.menu-panel-button {
  max-height: 30px;
}

.menu-panel-controll {
  display: flex;
  flex-direction: column;
  max-width: 90%;
}

.menu-panel-controll,
.menu-panel-controll-select {
  padding: 4px 10px;
}

.menu-panel-controll-select {
  max-width: 100%;
}

@media (min-width: 700px) {
  .menu-panel-wrapper {
    position: fixed;  
    flex-direction: row;
  }
}


</style>