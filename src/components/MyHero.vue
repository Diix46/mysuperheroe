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
      <div
        class="column is-one-quarter"
        v-for="heroe in heroes"
        :key="heroe.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by3">
              <img :src="heroe.image.url" @click="searchByID(heroe.id)" />
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

    <b-modal
      v-if="singleHeroe"
      v-model="isCardModalActive"
      :width="640"
      scroll="keep"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image is-3by3">
            <img :src="singleHeroe.image.url" alt="Image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="singleHeroe.image.url" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4 mb-0">{{ singleHeroe.name }}</p>
              <p class="title is-6">Aussi connu sous le nom de :</p>
              <p
                v-for="alias in singleHeroe.biography.aliases"
                :key="alias"
                class="subtitle is-6 mb-0"
              >
                {{ alias }}
              </p>
            </div>
          </div>

          <div class="content">
            {{ singleHeroe.name }} est un
            {{ singleHeroe.biography.alignment }} de l'univers
            {{ singleHeroe.biography.publisher }}. Il est apparu pour la
            première fois dans {{ singleHeroe.biography['first-appearance'] }}.
            Il exerce le métier de {{ singleHeroe.work.occupation }} à
            {{ singleHeroe.work.base }}.
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyHero",
  data() {
    return {
      heroes: null,
      singleHeroe: null,
      name: "",
      api_code: "10221833337675739",
      url_request: "http://localhost:8080/",
      isCardModalActive: false,
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
    searchByID: function (id) {
      this.isCardModalActive = true;
      axios
        .get(`${this.url_request}${this.api_code}/${id}`)
        .then((response) => {
          this.singleHeroe = response.data;
          console.log(this.singleHeroe);
        });
    },
  },
};
</script>

<style>
.container {
  font-family: Comics;
}

.columns {
  margin-top: 2rem;
}
section {
  margin-top: 1rem;
}
</style>