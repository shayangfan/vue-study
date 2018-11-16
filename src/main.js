import Vue from 'vue'
import App from './App'
import router from './router'

import VueGlobalError from './common/VueGlobalError';

/**
 * 系统异常捕获
 */
Vue.use(VueGlobalError(function(err){
  console.log("VueGlobalError:",err);
}));

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {

  console.log("errorHandler:",err);
}

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
