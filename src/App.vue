<template>
  <h1>{{ bookmarkStore.hello }}</h1>
  <h2>Bookmark manager</h2>
</template>

<script setup>
import { useBookmarkStore } from "./store/bookmark";

const bookmarkStore = useBookmarkStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
