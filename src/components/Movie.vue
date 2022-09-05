<template>
  <div>
    <h1>World</h1>
    {{ this.name }}
    <p>
      <picture>
        <source
          srcset="netflix_clone\src\assets\logo.jpeg"
          media="min-width: 500px"
        />
      </picture>
    </p>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      id: "",
      name: "World",
      genre: "",
      comingSoon: false,
      availDate: new Date(),
      thumbnail: "netflix_clone\src\assets\logo.jpeg",
      preview: "",
    };
  },
  methods: {
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
