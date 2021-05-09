import Vue from 'vue';
import './tailwind/tailwind.css'
import "@/scss/main.scss";
import router from '@/router/index.js'
import App from './App.vue';
import store from './store';

new Vue({
  el: '#app',
  render: h => h(App),
  router, store
})