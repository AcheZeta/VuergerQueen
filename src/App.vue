<template>
  <div id="app">
    <main>
      <img src="./assets/burgerQueenLogo.png" alt="Vue.js PWA">
       <br>
      <router-view></router-view>
      <button @click="add">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter += 1;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
