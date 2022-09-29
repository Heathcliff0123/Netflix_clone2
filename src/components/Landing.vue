<template>
  <div class="landing">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <button id="button" @click="logout">Log Out</button>
          <button id="button" @click="showMovielist">Movie List</button>
          <button id="button" @click="showWatchlist">Watch List</button>
        </div>
      </nav>
    </div>

    <h1>Netflix</h1>
    <div>
      <button id="button" @click="createCarousel">
        <span v-if="!this.carouselV">show carousel</span>
        <span v-if="this.carouselV">hide carousel</span>
      </button>
    </div>
    <p>Carousel</p>
    <carousel v-if="this.carouselV" :items-to-show="1.5">
      <slide v-for="slide in carouselSlides" :key="slide">
        <div class="carousel__item"><img :src="slide" /></div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    <Watchlist v-if="this.watchlist" />
    <Movielist v-if="this.movielist" />
  </div>
</template>

<script>
import { mounted } from "vue";
import Watchlist from "./Watchlist";
import Movielist from "./Movielist";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  mounted() {
    this.watchlist = false;
    this.movielist = false;
    console.log("hello");
    if (!localStorage.getItem("1")) {
      console.log("setting data");
      this.movies.forEach((obj) => {
        console.log(obj);
        localStorage.setItem(obj.id, JSON.stringify(obj));
      });
    }

    let today = new Date();
    for (let f = 1; f <= 20; f++) {
      let object = JSON.parse(localStorage.getItem(f));
      console.log(object);
      let date = new Date(object.availDate);
      if (today.getFullYear() >= date.getFullYear()) {
        if (today.getMonth() >= date.getMonth()) {
          if (today.getDate() >= date.getDate()) {
            object.comingSoon = false;
          } else {
            object.comingSoon = true;
          }
        } else {
          object.comingSoon = true;
        }
      } else {
        object.comingSoon = true;
      }

      localStorage.setItem(f, JSON.stringify(object));
    }

    for (let f = 1; f <= 20; f++) {
      let object = JSON.parse(localStorage.getItem(f));
      console.log(object.comingSoon);
      if (object.comingSoon) {
        this.carouselSlides.push(this.setImg(object.thumbnail));
      }
    }

    //localStorage.clear();
  },

  name: "Landing",
  data() {
    return {
      n: 1,
      watchlist: false,
      movielist: false,
      carouselSlides: [],
      carouselV: false,
      movies: [
        {
          id: "1",
          name: "Spider Man",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/20"),
          thumbnail: "spiderman",
          preview: "",
          watchlist: true,
        },
        {
          id: "2",
          name: "Black Widow",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/21"),
          thumbnail: "blackwidow",
          preview: "",
          watchlist: true,
        },
        {
          id: "3",
          name: "Iron Man",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/22"),
          thumbnail: "ironman",
          preview: "",
          watchlist: true,
        },
        {
          id: "4",
          name: "Thor",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/23"),
          thumbnail: "thor",
          preview: "",
          watchlist: true,
        },
        {
          id: "5",
          name: "Spider Man2",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/24"),
          thumbnail: "spiderman",
          preview: "",
          watchlist: true,
        },
        {
          id: "6",
          name: "Black Widow2",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/25"),
          thumbnail: "blackwidow",
          preview: "",
          watchlist: true,
        },
        {
          id: "7",
          name: "Iron Man2",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/26"),
          thumbnail: "ironman",
          preview: "",
          watchlist: true,
        },
        {
          id: "8",
          name: "Thor2",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/27"),
          thumbnail: "thor",
          preview: "",
          watchlist: true,
        },
        {
          id: "9",
          name: "Spider Man3",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/28"),
          thumbnail: "spiderman",
          preview: "",
          watchlist: true,
        },
        {
          id: "10",
          name: "Black Widow3",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/29"),
          thumbnail: "blackwidow",
          preview: "",
          watchlist: true,
        },
        {
          id: "11",
          name: "Iron Man3",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/09/30"),
          thumbnail: "ironman",
          preview: "",
          watchlist: true,
        },
        {
          id: "12",
          name: "Thor3",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/01"),
          thumbnail: "thor",
          preview: "",
          watchlist: true,
        },
        {
          id: "13",
          name: "Spider Man4",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/02"),
          thumbnail: "spiderman",
          preview: "",
          watchlist: true,
        },
        {
          id: "14",
          name: "Black Widow4",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/03"),
          thumbnail: "blackwidow",
          preview: "",
          watchlist: true,
        },
        {
          id: "15",
          name: "Iron Man4",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/04"),
          thumbnail: "ironman",
          preview: "",
          watchlist: true,
        },
        {
          id: "16",
          name: "Thor4",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/05"),
          thumbnail: "thor",
          preview: "",
          watchlist: true,
        },
        {
          id: "17",
          name: "Spider Man5",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/06"),
          thumbnail: "spiderman",
          preview: "",
          watchlist: true,
        },
        {
          id: "18",
          name: "Black Widow5",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/07"),
          thumbnail: "blackwidow",
          preview: "",
          watchlist: true,
        },
        {
          id: "19",
          name: "Iron Man5",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/08"),
          thumbnail: "ironman",
          preview: "",
          watchlist: true,
        },
        {
          id: "20",
          name: "Thor5",
          genre: "action",
          comingSoon: false,
          availDate: new Date("2022/10/09"),
          thumbnail: "thor",
          preview: "",
          watchlist: true,
        },
      ],
    };
  },
  components: {
    Watchlist,
    Movielist,
    mounted,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    logout() {
      console.log("logout");
      localStorage.setItem("0", "");
      this.$router.push("/");
    },
    showWatchlist() {
      console.log("watchlist"),
        (this.watchlist = !this.watchlist),
        (this.movielist = false);
      console.log(this.watchlist);
    },
    showMovielist() {
      console.log("movielist");
      (this.watchlist = false), (this.movielist = !this.movielist);
    },
    setImg(thumbnail) {
      var img = require.context("./assets/", false, /\.jpeg$/);
      return img("./" + thumbnail + ".jpeg");
    },
    setHtml(carouselHtml2) {
      this.carouselHtml = carouselHtml2;
    },
    createCarousel() {
      this.carouselV = !this.carouselV;
    },
  },
};
</script>

<style>
.landing {
  background-color: black;
}

#button {
  background-color: red;
}
</style>
