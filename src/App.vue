<template>
  <div id="app">
    <navigation/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
    import Navigation from "./components/Navigation";

    export default {
        components: {Navigation},
        name: 'App'
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-top:100px;
    color: #2c3e50;
  }
</style>
