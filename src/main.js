import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive'


Vue.config.productionTip = false
Vue.use(VueScrollactive);

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
