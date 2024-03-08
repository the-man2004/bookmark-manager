<template>
  <nav>
    <menu>
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link to="/bookmarks">BOOKMARKS</router-link>
      </li>
    </menu>
  </nav>
</template>

<style scoped>
nav {
  padding: 15px 30px;
  background: var(--primary-color);
  color: white;
  border-bottom: 2px solid var(--accent-color);
}

menu {
  display: flex;
  gap: 15px;
}

menu > li {
  display: inline-block;
}

menu > li > a {
  text-decoration: none;
  color: white;

  transition: all 300ms ease;
}

menu > li > a.router-link-active {
  color: var(--accent-color);
}
</style>
