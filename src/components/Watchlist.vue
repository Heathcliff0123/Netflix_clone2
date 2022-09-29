<template>
  <div class="container">
    <h1>Watchlist</h1>
    <div class="card-group" style="item-padding: 5rem; item-align: center">
      <Movie :cont="1" :watch="false" />
      <Movie :cont="2" :watch="false" />
      <Movie :cont="3" :watch="false" />
      <Movie :cont="4" :watch="false" />
      <Movie :cont="5" :watch="false" />
      <Movie :cont="6" :watch="false" />
      <Movie :cont="7" :watch="false" />
      <Movie :cont="8" :watch="false" />
      <Movie :cont="9" :watch="false" />
      <Movie :cont="10" :watch="false" />
      <Movie :cont="12" :watch="false" />
      <Movie :cont="11" :watch="false" />
      <Movie :cont="13" :watch="false" />
      <Movie :cont="14" :watch="false" />
      <Movie :cont="15" :watch="false" />
      <Movie :cont="16" :watch="false" />
      <Movie :cont="17" :watch="false" />
      <Movie :cont="18" :watch="false" />
      <Movie :cont="19" :watch="false" />
      <Movie :cont="20" :watch="false" />
    </div>
  </div>
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
