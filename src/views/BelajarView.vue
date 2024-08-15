<template>
  <div class="text-white">
    <input type="text" v-model="pokemon" />
    <p>{{ pokemon }}</p>
    <button class="btn btn-primary" @click="hitAPI">Request Pokemon</button>
    <p v-if="loading">Loading....</p>
    <BelajarView2 v-else :pokemonData="data" @cobaEmit="handleEmits" />
    <h3>{{ receivedEmits }}</h3>

    <!-- <div class="d-flex gap-1 justify-content-start align-items-center">
      <button class="btn btn-danger" @click="perhitungan.decrement">-</button>
      <p class="m-0">{{ perhitungan.count }}</p>
      <button class="btn btn-primary" @click="perhitungan.increment">+</button>
    </div> -->
  </div>
</template>

<script>
// import { useCounterStore } from "@/store/indexpinnia";
// import BelajarView2 from "./BelajarView2.vue";
// const receivedEmits = ref("");
// const perhitungan = useCounterStore();
// function handleEmits(message) {
//   receivedEmits.value = message;
// }
// vue2;
import axios from "axios";
import BelajarView2 from "./BelajarView2.vue";
export default {
  components: {
    BelajarView2,
  },
  data() {
    return {
      pokemon: "",
      data: [],
      dataComputed: [],
      loading: false,
      error: null,
      receivedEmits: "",
    };
  },
  methods: {
    async hitAPI() {
      this.loading = true;

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemon.toLowerCase()}`
        );
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          console.log(response);
          const result = response.data;
          this.data = result;
        } else {
          throw new Error("Failed to get API");
        }
      } catch (err) {
        console.log("Error", err);
      } finally {
        this.loading = false;
      }
    },
    handleEmits(message) {
      this.receivedEmits = message;
    },
  },
  watch: {
    pokemon(newValue) {
      if (newValue.trim()) {
        this.hitAPI();
      } else if (newValue.trim().toLowerCase().name === null) {
        this.data = [];
      }
    },
  },
};

// compotion API
// import { ref, watch } from "vue";

// const pokemon = ref("");
// const data = ref([]);
// const loading = ref(false);
// const error = ref(null);

// // hit API

// const hitAPI = async () => {
//   loading.value = true;
//   try {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLocaleLowerCase()}`
//     );

//     if (response.ok) {
//       const result = await response.json();
//       data.value = result;
//     } else {
//       throw new error("bad request");
//     }
//   } catch (err) {
//     console.log("Error during API", err);
//   } finally {
//     loading.value = false;
//   }
// };

// watch(pokemon, (newValue) => {
//   if (newValue.trim().toLowerCase()) {
//     hitAPI();
//   } else {
//     data.value = [];
//   }
// });
</script>

<style scoped>
/* Style di sini */
</style>
