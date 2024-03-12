<template>
  <div>
    <h1>My Bookmarks</h1>
  </div>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="title">Title</label>
      <input v-model="title" type="text" id="title" placeholder="e.g. Google" />
      <label for="url">Url</label>
      <input v-model="url" type="text" id="url" placeholder="e.g. google.com" />
      <label for="description">Description</label>
      <textarea
        v-model="description"
        id="description"
        placeholder="Search the world's information, including webpages, images, videos and more."
      ></textarea>
      <button>Submit</button>
    </form>
  </div>
  <div>
    <ul class="bookmark-wrapper">
      <BookmarkItem
        v-for="(bookmark, index) in bookmarkStore.bookmarks"
        :key="index"
        :bookmark="bookmark"
      ></BookmarkItem>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBookmarkStore } from "../store/bookmark";
import BookmarkItem from "../components/bookmarks/BookmarkItem.vue";

const bookmarkStore = useBookmarkStore();

const isDescriptionVisible = ref(false);

const title = ref("");
const url = ref("");
const description = ref("");

const resetForm = () => {
  title.value = "";
  url.value = "";
  description.value = "";
};

const handleSubmit = () => {
  console.log(title.value, url.value, description.value);

  if (title.value !== "" && url.value !== "") {
    bookmarkStore.addBookmark({
      title: title.value,
      url: url.value,
      description: description.value,
    });

    resetForm();
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
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
