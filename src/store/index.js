import { createStore } from "vuex";

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
        {
          id: "m2",
          image:
            "https://www.independent.ie/irish-news/38b52/39879819.ece/AUTOCROP/w620/40_Foot",
          title: "A swim at the Forty Foot",
          desc: "Sunny day swimming in the Irish sea",
        },
        {
          id: "m3",
          image:
            "https://mooneyboats.ie/wp-content/uploads/2014/07/mfv-ocean-dawn-700x460.jpg",
          title: "Fishing in Fenit",
          desc: "Caught no mackerel",
        },
        {
          id: "m4",
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/0b/db/4c/7e/phoenix-park-bikes.jpg",
          title: "A cycle in Phoenix park",
          desc: "Avoiding ignorant pedestrians on the cycle lanes",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories
    },
    memory(state) {
        return (memoryId) => {
            return state.memories.find(memory => memory.id === memoryId);
        };
    }
  },
});

export default store;