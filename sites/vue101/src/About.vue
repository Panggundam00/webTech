<template>
  <div>
    <h1>About Me</h1>

    <!-- <ul>
      <li v-for="(item, )" :key="item.name">
        {{ item.name }} >> {{ iten.quantity}}
      </li>
    </ul> -->
    <div>
      {{ today | moment()}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: new Date(),
      items: [
        {
          name: "ABC",
          quantity: 10
        },
        {
          name: "DEF",
          quantity: 36
        }
      ]
    };
  }
};
</script>

<style>
</style>