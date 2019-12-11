import Vue from "vue";
import Vuex from "vuex";
import { flatTree } from "@/helpers/converters";
import { get, has, filter } from "lodash-es";
import Axios from "axios";
import { mapToken } from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    places: {}
  },
  mutations: {
    places(state, value) {
      state.places = { ...value };
    },
    updateSinglePlace(state, place) {
      if (!has(state.places, place.id)) return;
      Vue.set(state.places, place.id, place);
    },
    addMapMarkers(state, treeItem) {
      const pickedPlaces = flatTree(treeItem);
      state.places = {
        ...state.places,
        ...pickedPlaces.reduce((result, pickedPlace) => {
          // if already saved in right sidebar -- skip it
          if (pickedPlace.isSaved) return result;

          return {
            ...result,
            [pickedPlace.id]: {
              ...pickedPlace,
              isShowOnMap: true
            }
          };
        }, {})
      };
    },
    saveMapMarker(state, { id }) {
      Vue.set(state.places, id, {
        ...state.places[id],
        isSaved: true,
        isShowOnMap: false
      });
    },
    unSaveMapMarker(state, place) {
      Vue.set(state.places, place.id, {
        ...state.places[place.id],
        isSaved: false
      });
    }
  },
  getters: {
    places(state) {
      return state.places;
    },
    savedPlaces(state, getters) {
      return filter(getters.places, place => get(place, "isSaved", false));
    },
    mapMarkers(state, getters) {
      return filter(getters.places, place => get(place, "isShowOnMap", false));
    }
  },
  actions: {
    getPlaceContextFromApi(state, place) {
      return new Promise((resolve, reject) => {
        Axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${place.position.lng},${place.position.lat}.json`,
          {
            params: {
              access_token: mapToken
            }
          }
        )
          .then(response => {
            resolve(get(response, "data.features[0].context", []));
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  modules: {}
});
