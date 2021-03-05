import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import './assets/styles/font.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
