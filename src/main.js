// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import RouterSync from 'vuex-router-sync'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
Vue.use(RouterSync);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    // Initialize Firebase
    let config = {
      apiKey: 'AIzaSyCxV4SoJw3Vp088wuw6328NLtrPg7oGF44',
      authDomain: 'onlinestore-299a7.firebaseapp.com',
      databaseURL: 'https://onlinestore-299a7.firebaseio.com',
      projectId: 'onlinestore-299a7',
      storageBucket: 'onlinestore-299a7.appspot.com',
      messagingSenderId: '132664446018'
    };
    fb.initializeApp(config);

    fb.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
});
