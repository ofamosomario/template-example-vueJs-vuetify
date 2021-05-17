import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: '#f0f2f2',
        primary: '#009fab',
        secondary: '#415b64',
        accent: '#82B1FF',
        error: '#cb0f0a',
        info: '#67afca',
        success: '#46c09d',
        warning: '#ffff00',
        darkGrey: '#575757'
      },
    },
  },
});