import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Bookmarks from "../views/Bookmarks.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/bookmarks",
      component: Bookmarks,
    },
  ],
});

export default router;
