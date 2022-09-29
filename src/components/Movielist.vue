<template>
  <div class="container">
    <h1>Watchlist</h1>
    <div class="card-group" style="item-padding: 5rem; item-align: center">
      <Movie :cont="1" :watch="true" />
      <Movie :cont="2" :watch="true" />
      <Movie :cont="3" :watch="true" />
      <Movie :cont="4" :watch="true" />
      <Movie :cont="5" :watch="true" />
      <Movie :cont="6" :watch="true" />
      <Movie :cont="7" :watch="true" />
      <Movie :cont="8" :watch="true" />
      <Movie :cont="9" :watch="true" />
      <Movie :cont="10" :watch="true" />
      <Movie :cont="12" :watch="true" />
      <Movie :cont="11" :watch="true" />
      <Movie :cont="13" :watch="true" />
      <Movie :cont="14" :watch="true" />
      <Movie :cont="15" :watch="true" />
      <Movie :cont="16" :watch="true" />
      <Movie :cont="17" :watch="true" />
      <Movie :cont="18" :watch="true" />
      <Movie :cont="19" :watch="true" />
      <Movie :cont="20" :watch="true" />
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
