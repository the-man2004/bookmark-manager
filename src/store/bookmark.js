import { defineStore } from "pinia";

export const useBookmarkStore = defineStore("useBookmarkStore", {
  state: () => {
    return {
      hello: "Hello World",
      bookmarks: [
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "Also a place to buy computer hardware.",
        },
        // remove later
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "Also a place to buy computer hardware.",
        },
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "Also a place to buy computer hardware.",
        },
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "Also a place to buy computer hardware.",
        },
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "",
        },
      ],
    };
  },
  getters: {
    bookmarksSorted: (state) => {
      const arr = [...state.bookmarks];

      arr.sort((a, b) => {
        const titleA = a.title;
        const titleB = b.title;

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });

      return arr;
    },
  },
  actions: {
    addBookmark(newBookmark) {
      this.bookmarks.push(newBookmark);
    },
  },
});
