<template>
  <div class="card">
    <img
      :src="setImg(this.thumbnail)"
      class="card-img-top"
      v-bind:alt="this.name"
    />
    <div class="card-body">
      <h5 class="card-title">{{ this.name }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      id: "",
      name: "",
      genre: "",
      comingSoon: false,
      availDate: new Date(),
      thumbnail: "",
      //source: spiderman,
      preview: "",
    };
  },
  methods: {
    setImg(thumbnail) {
      var img = require.context("./assets/", false, /\.jpeg$/);
      return img("./" + thumbnail + ".jpeg");
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

<style></style>
