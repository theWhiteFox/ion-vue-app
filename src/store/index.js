import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      memories: [
        {
            "id": "675958",
            "image": "https://visitwicklow.ie/wp-assets/uploads/2018/12/the-sugarloaf.jpg",
            "title": "Hiking the Great Sugar Loaf",
            "slug": "hiking-the-sugar-loaf",
            "desc": "Wicklow mountains"
        },
        {
            "id": "p2",
            "image": "https://www.independent.ie/irish-news/38b52/39879819.ece/AUTOCROP/w620/40_Foot",
            "title": "A swim at the Forty Foot",
            "slug": "a-swim-at-the-forty-foot",
            "desc": "Sunny day swimming in the toxic Irish sea"
        },
        {
            "id": "p3",
            "image": "https://mooneyboats.ie/wp-content/uploads/2014/07/mfv-ocean-dawn-700x460.jpg",
            "title": "Fishing in Fenit",
            "slug": "fishing-in-fenit",
            "desc": "Caught no mackerel"
        },
        {
            "id": "p4",
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/0b/db/4c/7e/phoenix-park-bikes.jpg",
            "title": "A cycle in Phoenix park",
            "slug": "a-cycle-in-phoenix-park",
            "desc": "Avoiding ignorant pedestrians on cycle lanes"
        }
    ]
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
        console.log(memoryId)
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
