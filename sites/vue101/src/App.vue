<template>
  <div class="container" id="app">
    <img src="./assets/logo.png" />
    <h1 :title="msg">{{ msg }}</h1>

    
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
    
  </div>
</template>

<script>
import Counter from "./Counter"
export default {
  name: "app",
  data() {
    return {
      msg: "my vue",
    };
  },
};
</script>

<style lang="scss">

</style>
