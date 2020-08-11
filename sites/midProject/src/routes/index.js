import VueRouter from "vue-router"
import Home from "./../Home.vue"
import MakeDonate from "./../MakeDonate.vue"
import DonateApp from "./../DonateApp.vue"

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/makeDonate",
    name: "MakeDonate",
    component: MakeDonate
  },
  {
    path: "/donateApp",
    name: "DonateApp",
    component: DonateApp
  }

]


export default new VueRouter({
  mode: "history",
  routes
})
