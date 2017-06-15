require('!style-loader!css-loader!ratchet-npm/dist/css/ratchet.css');// get ratchet
require('!style-loader!css-loader!font-awesome/css/font-awesome.css');// get font-awesome
require('!style-loader!css-loader!animate.css/animate.css');//get animate.css

import FastClick from 'fastclick';   
FastClick.attach(document.body);//fastclick init

import Vue from "vue";
import App from './app.vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueProgressBar from 'vue-progressbar';
import infiniteScroll from 'vue-infinite-scroll';

import routes from './src/routers.js';
var inBrowser = typeof window !== 'undefined';
 console.log("网络信息:"+inBrowser);
Vue.use(VueRouter);
Vue.use(VueResource);
var options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};

Vue.use(VueProgressBar,options);
Vue.use(infiniteScroll);



const router = new VueRouter({
  routes: routes
});

const app = new Vue({
  router: router,
  render:function(h){
      return h(App);
  }
}).$mount('#app');

