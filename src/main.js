import Vue from 'vue';
import App from './App.vue';
import router from './router';
import navbar from './components/navbar.vue';
import save from './components/save.vue';

import store from './store';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'tailwindcss/tailwind.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAlt,faBars, faMinusCircle} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserAlt, faBars, faMinusCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);
var firebaseConfig = {
    apiKey: 'AIzaSyD18RyCRqsdEzKg-h5wsla0kguOM7SHR2c',
    authDomain: 'assignment-47c5e.firebaseapp.com',
    projectId: 'assignment-47c5e',
    storageBucket: 'assignment-47c5e.appspot.com',
    messagingSenderId: '304515769115',
    appId: '1:304515769115:web:e50d6c1b572a5bf5f4e9be',
    measurementId: 'G-7JMH447J3J',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('navbar',navbar)
Vue.component('save',save)
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
