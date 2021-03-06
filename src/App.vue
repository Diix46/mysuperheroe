<template>
  <div id="app">
    <h1>My Super Hero</h1>
    <MyHero msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import MyHero from "./components/MyHero.vue";

export default {
  name: "App",
  components: {
    MyHero,
  },
};
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

body {
  background: center url(../public/img/background.jpg);
}
h1 {
  text-align: center;
  font-family: Comics;
  font-size: 3rem;
  -webkit-text-fill-color: yellow; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}
</style>
