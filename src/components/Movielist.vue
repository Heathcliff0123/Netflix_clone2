<template>
  <v-container>
    <h1>Movielist</h1>
    <v-layout
      row
      wrap
      class="card-group"
      style="justify-content-centre item-padding: 5rem; self-align: center"
    >
      <v-flex xs12 sm6 md4 lg3 v-for="n in 20" :key="n"
        ><Movie :cont="n" :watch="true"
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

<style></style>
