import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader
import VueCarousel from 'vue-carousel';

Vue.use(Vuetify);
Vue.use(VueCarousel);

export default new Vuetify({
    icons: {
        iconfont: 'fa', // default - only for display purposes
    },
});