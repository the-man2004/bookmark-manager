<template>
  <li
    class="bookmark-item"
    @mouseenter="isDescriptionVisible = true"
    @mouseleave="isDescriptionVisible = false"
  >
    <a :href="props.bookmark.url" target="_blank">
      <div class="icon">
        {{ props.bookmark.title[0].toUpperCase() }}
      </div>
      <h3>{{ props.bookmark.title }}</h3>
    </a>
    <div
      v-if="isDescriptionVisible === true && props.bookmark.description !== ''"
      class="description"
    >
      {{ bookmark.description }}
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["bookmark"]);

const isDescriptionVisible = ref(false);
</script>

<style scoped>
.bookmark-item {
  position: relative;

  display: flex;
  flex-direction: column;
  list-style: none;
  color: var(--primary-color);

  width: 100px;
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
  background: var(--accent-color);

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

.bookmark-item img {
  width: 50px;
}
.bookmark-item h3 {
  margin-top: 5px;
  text-align: center;
}

.bookmark-item .description {
  position: absolute;
  z-index: 100;
  padding: 10px;
  top: 105%;
  width: 100%;
  background: var(--primary-color);
  color: var(--light-color);

  font-size: 0.8rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px var(--primary-color);
}
</style>
