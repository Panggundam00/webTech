<template>
  <div>
    <h1>HOME</h1>
    <h1>{{ test }}</h1>

    <counter count="10"></counter>
    <counter count="20"></counter>
    <counter></counter>
    <router-link to="/about">Contact Me</router-link>
  </div>
</template>

<script>
import Counter from "./Counter";
export default {
  data() {
    return{
      test: "page"
    }
  },
  methods: {},
  components:{
    Counter
  }
};
</script>

<style>
</style>