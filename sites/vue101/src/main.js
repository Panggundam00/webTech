import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./routes"
import VueMoment from "vue-moment"

Vue.use(VueRouter)
Vue.use(VueMoment)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
