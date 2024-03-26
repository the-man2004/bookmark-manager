<template>
  <h1>MY BOOKMARKS</h1>
  <div>
    <ul v-if="screen" class="bookmark-wrapper">
      <BookmarkItem
        v-for="(bookmark, index) in bookmarkStore.bookmarksSorted"
        :key="index"
        :bookmark="bookmark"
        :screen="screen"
      ></BookmarkItem>
      <AddBookmark></AddBookmark>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useBookmarkStore } from "../store/bookmark";
import BookmarkItem from "../components/bookmarks/BookmarkItem.vue";
import AddBookmark from "../components/bookmarks/AddBookmark.vue";

const bookmarkStore = useBookmarkStore();

const screen = ref();

onMounted(() => {
  if ("ontouchstart" in window || navigator.maxTouchPoints) {
    screen.value = "mobile";
  } else {
    screen.value = "desktop";
  }
});
</script>

<style scoped>
h1 {
  margin: 60px 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
}

.bookmark-wrapper {
  margin: 0 auto 60px auto;
  padding: 0 30px;
  max-width: 1250px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
