<template>
  <div>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <button @click="showMovielist">Movie List</button>
          <button @click="showWatchlist">Watch List</button>
        </div>
      </nav>
    </div>
    <div class="carousel-inner" id="carousel-img"></div>
    <h1>Netflix</h1>
  </div>
</template>

<script>
window.onload = (e) => {
  console.log(this.carouselHtml);
  document.getElementById("carousel-img").innerHTML = this.carouselHtml;
};
import { beforeMount, onMounted } from "vue";
export default {
  beforeMount() {
    this.watchlist = false;
    this.movielist = true;
    let imgs = [],
      imgHtml = "",
      first;
    this.movies.forEach((obj) => {
      first = imgs.length == 0 ? "active" : "";
      imgHtml = '<div class="carousel-item ' + first + '">';
      imgHtml += '<img:src="' + this.setImg(obj.thumbnail) + '"/>';
      imgHtml += "</div>";
      imgs.push(imgHtml);
    });
    this.setHtml(imgs.join(""));
    console.log("hello");
    console.log(carouselHtml);
    console.log("hello2");
  },
  //   onMounted() {
  //     document.getElementById("carousel-img").innerHTML = this.carouselHtml;
  //   },
  name: "Landing",
  data() {
    return {
      watchlist: false,
      movielist: true,
      carouselHtml: "",
      movies: [
        {
          id: "1",
          name: "Spider Man",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/08/20"),
          thumbnail: "spiderman",
          preview: "",
        },
        {
          id: "2",
          name: "Black Widow",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/08/20"),
          thumbnail: "blackwidow",
          preview: "",
        },
        {
          id: "3",
          name: "Iron Man",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/08/20"),
          thumbnail: "ironman",
          preview: "",
        },
        {
          id: "4",
          name: "Thor",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/08/20"),
          thumbnail: "thor",
          preview: "",
        },
      ],
    };
  },
  components: { beforeMount, onMounted },
  methods: {
    showWatchlist() {
      (this.watchlist = true), (this.movielist = false);
    },
    showMovielist() {
      (this.watchlist = false), (this.movielist = true);
    },
    setImg(thumbnail) {
      var img = require.context("./assets/", false, /\.jpeg$/);
      return img("./" + thumbnail + ".jpeg");
    },
    setHtml(carouselHtml2) {
      this.carouselHtml = carouselHtml2;
    },
  },
};
</script>

<style></style>
