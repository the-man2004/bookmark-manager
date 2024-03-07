import { defineStore } from "pinia";

export const useBookmarkStore = defineStore("useBookmarkStore", {
  state: () => {
    return {
      hello: "Hello World",
      bookmarks: [],
    };
  },
  actions: {},
});
