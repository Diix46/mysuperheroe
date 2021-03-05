<template>
  <div class="container">
    <section>
      <b-field>
        <b-input
          placeholder="Search..."
          type="search"
          v-model="name"
          icon="magnify"
          icon-clickable
          @icon-click="searchHeroes(name)"
          v-on:keyup.enter.native="searchHeroes(name)"
        >
        </b-input>
      </b-field>
    </section>

    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="heroe in heroes" :key="heroe.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by3">
              <img :src="heroe.image.url" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="heroe.image.url" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ heroe.name }}</p>
                <p class="subtitle is-6">{{ heroe.appearance.race }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyHero",
  data() {
    return {
      heroes: null,
      name: "",
      api_code: "10221833337675739",
      url_request: "http://localhost:8080/",
    };
  },

  methods: {
    searchHeroes: function (name) {
      axios
        .get(`${this.url_request}${this.api_code}/search/${name}`)
        .then((response) => {
          this.heroes = response.data.results;
        });
    },
  },
};
</script>

<style>
.container {
  font-family: Comics;
}
</style>