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
          id: 1,
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
          id: 2,
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
          id: 3,
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "Also a place to buy computer hardware.",
          id: 4,
        },
        // remove later
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
          id: 5,
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
          id: 6,
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
          id: 7,
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "Also a place to buy computer hardware.",
          id: 8,
        },
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
          id: 9,
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
          id: 10,
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
          id: 11,
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "Also a place to buy computer hardware.",
          id: 12,
        },
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
          id: 13,
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
          id: 14,
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
          id: 15,
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "Also a place to buy computer hardware.",
          id: 16,
        },
        {
          title: "Wootware",
          url: "https://wootware.co.za",
          description: "A place to buy computer hardware.",
          id: 17,
        },
        {
          title: "Google",
          url: "https://google.com",
          description: "Search for things.",
          id: 18,
        },
        {
          title: "Takealot",
          url: "https://takealot.com",
          description: "Find a lot of different products.",
          id: 19,
        },
        {
          title: "Evetech",
          url: "https://evetech.co.za",
          description: "",
          id: 20,
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
    removeBookmark(id) {
      console.log(id);
      const filteredBookmarks = this.bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );

      this.bookmarks = filteredBookmarks;
    },
  },
});
