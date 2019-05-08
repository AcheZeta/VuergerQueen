// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});


// Firebase App is always required and must be first
const firebase = require('firebase/app');

// Add additional services that you want to use
require('firebase/auth');
// require('firebase/database');
require('firebase/firestore');
require('firebase/messaging');
// require('firebase/functions');

// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");

const config = {
  // ...
};
firebase.initializeApp(config);

