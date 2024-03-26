<template>
  <li
    :class="{
      'bookmark-item': props.screen === 'desktop',
      'bookmark-item-mobile': props.screen === 'mobile',
    }"
    @mouseenter="isDescriptionVisible = true"
    @mouseleave="isDescriptionVisible = false"
  >
    <button
      v-if="isDescriptionVisible === true"
      @click="bookmarkStore.removeBookmark(props.bookmark.id)"
    >
      <span class="cross"></span>
    </button>
    <a :href="props.bookmark.url" target="_blank">
      <div class="icon">
        {{ props.bookmark.title[0].toUpperCase() }}
      </div>
      <div>
        <h3>{{ props.bookmark.title }}</h3>
        <div
          v-if="
            isDescriptionVisible === true && props.bookmark.description !== ''
          "
          class="description"
        >
          {{ bookmark.description }}
        </div>
      </div>
    </a>
  </li>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBookmarkStore } from "@/store/bookmark";

const props = defineProps(["bookmark", "screen"]);
const bookmarkStore = useBookmarkStore();

const isDescriptionVisible = ref(true);

onMounted(() => {
  if (props.screen === "desktop") {
    isDescriptionVisible.value = false;
  }
});
</script>

<style scoped>
.bookmark-item {
  padding-bottom: 5px;
  position: relative;

  display: flex;
  flex-direction: column;
  list-style: none;
  color: var(--primary-color);

  width: 75px;
}
.bookmark-item a {
  position: relative;
  text-decoration: none;
  color: var(--primary-color);
}
button {
  padding: 5px;
  aspect-ratio: 1 / 1;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 1px 1px 5px var(--primary-color);
}
.cross {
  display: block;
  height: 4px;
  width: 15px;
  transform: rotate(45deg);
  background: var(--primary-color);
}
.cross::after {
  content: "";
  display: block;
  height: 4px;
  width: 15px;
  transform: rotate(90deg);
  background: var(--primary-color);
}
.icon {
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);

  width: 75px;
  border-radius: 75px;
  aspect-ratio: 1 / 1;

  font-size: 2.5rem;
  font-weight: 700;
  color: white;

  box-shadow: 1px 1px 5px var(--primary-color);
  transition: all 300ms ease;
}
.bookmark-item:hover a .icon,
.bookmark-item:focus a .icon {
  box-shadow: 2px 2px 10px var(--primary-color);
}

.bookmark-item .bookmark-item img {
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
  top: 100%;
  width: 100%;
  background: var(--primary-color);
  color: var(--light-color);

  font-size: 0.8rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px var(--primary-color);
}

/* Mobile styles */
.bookmark-item-mobile {
  padding: 5px 30px 5px 5px;
  padding-bottom: 10px;
  position: relative;
  list-style: none;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 100%;
  max-width: 550px;
}

.bookmark-item-mobile a {
  text-decoration: none;
  display: flex;
}

.bookmark-item-mobile h3 {
  display: block;
  margin-left: 10px;
  color: var(--primary-color);
}

.bookmark-item-mobile .description {
  margin-left: 10px;
  color: var(--primary-color);
}

.bookmark-item-mobile .icon {
  margin: 0;
  flex-shrink: 0;
  max-height: 75px;
}

.bookmark-item-mobile button {
  top: 5px;
  right: 5px;
}

@media (min-width: 550px) {
  .bookmark-item,
  .bookmark-item .icon {
    width: 100px;
  }
}
</style>
