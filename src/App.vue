<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Madimi+One&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}

:root {
  --primary-color: rgb(39, 39, 39);
  --secondary-color: rgb(46, 46, 46);
  --light-color: white;
  --accent-color: red;
}

#app {
  font-family: "Madimi One", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
