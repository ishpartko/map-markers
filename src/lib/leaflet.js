import L from 'leaflet';
import Geocoder from 'leaflet-control-geocoder';

// hack to fix it https://github.com/vue-leaflet/Vue2Leaflet/issues/96#issuecomment-341453050
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const tileLayer = L.tileLayer; 
export const map = L.map;
export const marker = L.marker;
export const Nominatim = Geocoder.Nominatim;