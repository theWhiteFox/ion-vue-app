import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://visitwicklow.ie/wp-assets/uploads/2018/12/the-sugarloaf.jpg",
          title: "Hiking the Suger Loaf",
          desc: "Wicklow mountains",
        },
      ],
    };
  },
  actions: {
    getPosts() {
      axios
        .get("./dummy-data.json")
        .then((response) => {
          this.memories = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
