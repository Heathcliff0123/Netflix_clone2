<template>
  <v-card
    flat
    v-if="(this.watchlist || this.watch) && !this.comingSoon"
    class=""
  >
    <img
      :src="setImg(this.thumbnail)"
      class="card-img-top w-300"
      v-bind:alt="this.name"
      style="width: 18rem"
    />
    <div class="card-body">
      <h5 class="card-title">{{ this.name }}</h5>
    </div>
    <div>
      <button id="mButton" @click="changeWatchlist">
        <span v-if="this.watchlist">Remove from Watchlist</span>
        <span v-else>Add to watchlist</span>
      </button>
    </div>
  </v-card>
</template>

<script>
import { BeforeMounted, mounted } from "vue";
export default {
  props: ["cont", "watch"],
  name: "Movie",
  components: { BeforeMounted, mounted },
  mounted() {
    const hold = JSON.parse(localStorage.getItem(this.cont));
    this.id = hold.id;
    this.name = hold.name;
    this.genre = hold.genre;
    this.comingSoon = hold.comingSoon;
    this.availDate = hold.availDate;
    this.thumbnail = hold.thumbnail;
    this.watchlist = hold.watchlist;
  },
  data() {
    return {
      id: " ",
      name: " ",
      genre: " ",
      comingSoon: " ",
      availDate: " ",
      thumbnail: " ",
      watchlist: " ",

      //source: spiderman,
      preview: " ",
    };
  },
  methods: {
    changeWatchlist() {
      console.log("removed");
      this.watchlist = !this.watchlist;
      const hold = JSON.parse(localStorage.getItem(this.cont));
      hold.watchlist = this.watchlist;
      localStorage.setItem(hold.id, JSON.stringify(hold));
    },
    setImg(thumbnail) {
      const hold = JSON.parse(localStorage.getItem(this.cont));
      var img = require.context("./assets/", false, /\.jpeg$/);
      return img("./" + hold.thumbnail + ".jpeg");
    },
    getId() {
      return id;
    },
    getName() {
      return name;
    },
    getGenre() {
      return genre;
    },
    getComingSoon() {
      return comingSoon;
    },
    getAvailDate() {
      return availDate;
    },
    getThumbnail() {
      return thumbnail;
    },
    getPreview() {
      return preview;
    },
    setId(id) {
      this.id = id;
    },
    setName(name) {
      this.name = name;
    },
    getGenre(genre) {
      this.genre = genre;
    },
    getComingSoon(cs) {
      this.comingSoon = cs;
    },
    getAvailDate(ad) {
      this.availDate = ad;
    },
    getThumbnail(tn) {
      this.thumbnail = tn;
    },
    getPreview(preview) {
      this.preview = preview;
    },
  },
};
</script>

<style>
.card {
  width: 18rem;
  background-color: red;
  padding: 2;
  margin: 2;
  align-self: center center;
}

#mButton {
  background-color: red;
}
</style>
