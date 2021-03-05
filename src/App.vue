<template>
  <div id="app">
    <h1>My Super Hero</h1>
    <MyHero msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MyHero from './components/MyHero.vue'

export default {
  name: 'App',
  components: {
    MyHero
  }
}
</script>

<style>

body{
  background-image: url(../public/img/background.jpg);
}
h1{
  text-align: center;
  font-family: Comics;
  font-size: 3rem;
  color: yellow
}
</style>
