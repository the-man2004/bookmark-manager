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
      <li
        v-for="(bookmark, index) in bookmarkStore.bookmarks"
        :key="index"
        class="bookmark-item"
      >
        <a :href="bookmark.url" target="_blank">
          <div class="icon">{{ bookmark.title[0].toUpperCase() }}</div>
          <h3>{{ bookmark.title }}</h3>
        </a>
        <div class="description">
          {{ bookmark.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBookmarkStore } from "../store/bookmark";

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
  display: flex;
  gap: 15px;
}

.bookmark-item {
  position: relative;

  display: flex;
  flex-direction: column;
  list-style: none;
  color: var(--primary-color);

  max-width: 125px;
}
.bookmark-item a {
  text-decoration: none;
  color: var(--primary-color);
}
.bookmark-item .icon {
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  background: red;

  width: 100px;
  border-radius: 75px;
  aspect-ratio: 1 / 1;

  font-size: 2.5rem;
  font-weight: 700;
  color: white;

  box-shadow: 1px 1px 5px var(--primary-color);
  transition: all 300ms ease;
}
.bookmark-item a:hover .icon,
.bookmark-item a:focus .icon {
  box-shadow: 2px 2px 10px var(--primary-color);
}
.bookmark-item h3 {
  margin-top: 5px;
  text-align: center;
}

.bookmark-item .description {
  position: absolute;
  padding: 10px;
  top: 105%;
  background: var(--primary-color);
  color: var(--light-color);

  font-size: 0.8rem;
  border-radius: 10px;
}
</style>
