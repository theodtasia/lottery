import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

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

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
