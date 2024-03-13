<template>
  <h1>MY BOOKMARKS</h1>
  <div>
    <ul class="bookmark-wrapper">
      <BookmarkItem
        v-for="(bookmark, index) in bookmarkStore.bookmarks"
        :key="index"
        :bookmark="bookmark"
      ></BookmarkItem>
      <AddBookmark></AddBookmark>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBookmarkStore } from "../store/bookmark";
import BookmarkItem from "../components/bookmarks/BookmarkItem.vue";
import AddBookmark from "../components/bookmarks/AddBookmark.vue";

const bookmarkStore = useBookmarkStore();
</script>

<style scoped>
h1 {
  margin: 60px 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
}

.bookmark-wrapper {
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1250px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
