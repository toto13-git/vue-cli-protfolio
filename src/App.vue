<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      <router-view />
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
import "normalize.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  font-size: 62.5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  opacity: 0.3;
}

#nav a.router-link-exact-active {
  color: #606cef;
  /* color: #42b983; */
  opacity: 1;
}

.wrapper {
  margin: 120px 80px 0;
}

h1 {
  font-size: 4.8rem;
  margin: 0 0 40px 0;
}

h2 {
  font-size: 2.4rem;
  margin: 0;
}
p {
  font-size: 1.6rem;
  line-height: 1.8;
}

a {
  font-size: 1.6rem;
  margin: 0;
}
</style>
