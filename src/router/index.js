import Vue from 'vue';
import VueRouter from 'vue-router'
import Child from '@/components/child.vue'
import '@babel/polyfill'
Vue.use(VueRouter);



const routes = [
  {
    path: '/child',
    name: 'Child',
    component: Child,
  },
]

const router = new VueRouter({
  routes,
});

export default router;