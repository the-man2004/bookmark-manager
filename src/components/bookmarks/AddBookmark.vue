<template>
  <li>
    <button @click="formIsOpen = !formIsOpen">
      <span></span>
    </button>
    <h3>Add</h3>
  </li>
  <teleport to="body">
    <div
      v-show="formIsOpen === true"
      @click="formIsOpen = !formIsOpen"
      class="backdrop"
    ></div>
    <BookmarkForm
      v-show="formIsOpen === true"
      @submit="formIsOpen = !formIsOpen"
    ></BookmarkForm>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import BookmarkForm from "./BookmarkForm.vue";

const formIsOpen = ref(false);
</script>

<style scoped>
li {
  list-style: none;
}

h3 {
  margin-top: 5px;
  text-align: center;
}

button {
  padding: 10px;
  width: 75px;
  aspect-ratio: 1 / 1;
  border-radius: 100px;
  border: none;

  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  background-color: rgba(0, 0, 0, 0.11);
  cursor: pointer;
}

span {
  display: block;
  width: 100%;
  height: 7.5px;
  background: var(--primary-color);

  border-radius: 100px;
  transition: all 300ms ease;
}
span::after {
  content: "";
  display: block;
  width: 100%;
  height: inherit;
  background: var(--primary-color);
  transform: rotate(90deg);

  border-radius: 100px;
}

button:hover span {
  transform: rotate(90deg);
}

/* Backdrop */
.backdrop {
  position: fixed;
  inset: 0;
  background: black;
  opacity: 0.5;
  cursor: pointer;
}

@media (min-width: 550px) {
  button {
    width: 100px;
  }
  span {
    height: 10px;
  }
}
</style>
