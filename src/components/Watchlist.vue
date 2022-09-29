<template>
  <v-container>
    <h1>Watchlist</h1>
    <v-layout
      row
      wrap
      class="card-group"
      style="justify-content-centre item-padding: 5rem; self-align: center"
    >
      <v-flex xs12 sm6 md4 lg3 v-for="n in 20" :key="n"
        ><Movie :cont="n" :watch="false"
      /></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mounted } from "vue";
import Movie from "./Movie";
export default {
  data() {
    return {
      movies: "",
      n: 1,
    };
  },
  components: {
    Movie,
    mounted,
  },
  methods: {},
  mounted() {
    console.log("mounted");
    // console.log(JSON.parse(localStorage.getItem("13")));
  },
};
</script>

<style>
.card-group {
  item-padding: 5rem;
  item-align: center;
  display: inline;
}
</style>
