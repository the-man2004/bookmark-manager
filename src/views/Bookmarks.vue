<template>
  <div id="bookmark-container">
    <aside>
      <button>Add Bookmark</button>
    </aside>
    <main>Main</main>
  </div>
</template>

<style scoped>
#bookmark-container {
  display: grid;
  grid-template-columns: 250px 1fr;
}

aside {
  min-height: 100vh;
  background: var(--primary-color);
  color: var(--light-color);
}

main {
  background: var(--secondary-color);
}
</style>
