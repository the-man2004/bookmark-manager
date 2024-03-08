<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: rgb(39, 39, 39);
  --secondary-color: rgb(46, 46, 46);
  --light-color: white;
  --accent-color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
