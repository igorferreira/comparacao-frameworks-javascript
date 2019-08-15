<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <JogoAdivinhacao/>
  </div>
</template>

<script>
import JogoAdivinhacao from "./components/JogoAdivinhacao";

export default {
  name: "App",
  components: {
    JogoAdivinhacao
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
