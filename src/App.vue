<template>
  <router-view></router-view>
</template>

<script setup>
import { useBookmarkStore } from "./store/bookmark";

const bookmarkStore = useBookmarkStore();
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
