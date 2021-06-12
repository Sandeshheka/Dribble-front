import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB-pq5SIplefFFVkGv1O9j00srx9CyFEUg',
    libraries: 'places'
  }
});