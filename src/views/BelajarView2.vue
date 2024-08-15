<template>
  <div class="row align-items-center">
    <div class="col-4">
      <img
        width="500"
        :src="pokemonData.sprites?.front_default"
        :alt="pokemonData.name"
      />
    </div>
    <div class="col-8 d-flex flex-column text-center">
      <h1>{{ pokemonData.name }}</h1>
      <p>Weight :{{ pokemonData.weight }}</p>
      <div>
        <h4>Keterangan</h4>
        <p></p>
      </div>
      <a href="">Detail Pokemon {{ pokemonData.name }}</a>
    </div>
  </div>
  <button class="btn btn-primary" @click="sendMessage">Send Message</button>
</template>

<script>
import { useCounterStore } from '@/store/indexpinnia';

// vue3
// const emit = defineEmits(["cobaEmit"]);
// function sendMessage() {
//   emit("cobaEmit", "Data Pokemon ini diambil dengan API ");
// }
// const props = defineProps({
//   pokemonData: {
//     type: Array,
//     require: true,
//   },
// });

// vue2
export default {
  
 
  props: {
    pokemonData: {
      type: Object,
      require: true,
    },
  },
  methods: {
    sendMessage() {
      this.$emit("cobaEmit", "Data Pokemon ini diambil denga API (VUE2)");
    },
  },
  computed:{
    count(){
      return useCounterStore
    }
  }
};
</script>

<style></style>
