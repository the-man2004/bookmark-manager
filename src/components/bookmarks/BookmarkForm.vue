<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <label for="title">Title</label>
      <input
        v-model="title"
        type="text"
        id="title"
        placeholder="e.g. Google"
        required
      />
      <label for="url">Url</label>
      <input
        v-model="url"
        type="text"
        id="url"
        placeholder="e.g. https://google.com"
        required
      />
      <label for="description">Description (optional)</label>
      <textarea
        v-model="description"
        id="description"
        placeholder="Search the world's information, including webpages, images, videos and more."
      ></textarea>
      <button>ADD</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBookmarkStore } from "../../store/bookmark";

const bookmarkStore = useBookmarkStore();

const emit = defineEmits(["submit"]);

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
    emit("submit");
  }
};
</script>

<style scoped>
.form-container {
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%) translateY(-50%);

  width: 80vw;
  max-width: 550px;
  border: 2px solid var(--accent-color);
  border-radius: 10px;
  font-family: "Madimi One";
  background: var(--primary-color);
  color: var(--light-color);
}

.form-container label {
  font-size: 1.2rem;
}

.form-container input,
.form-container textarea {
  margin: 15px 0;
  padding: 5px;
  display: block;
  width: 100%;
}

.form-container textarea {
  height: 150px;
  resize: none;
}

.form-container button {
  display: inline-block;
  padding: 5px 15px;
}
</style>
