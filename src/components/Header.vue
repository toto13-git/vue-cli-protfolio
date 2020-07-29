<template>
  <div class="header">
    <div class="nav-wapper">
      <router-link class="nav" to="/">Home</router-link>
      <router-link class="nav" to="/about">About</router-link>
      <router-link class="nav" to="/production">Production</router-link>
      <router-link class="nav" to="/skill">Skill</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Header",
      text: "Hello Vue.js!",
    };
  },
};
</script>

<style scoped>
.nav-wapper {
  text-align: right;
  margin: 40px 80px 0 0;
}
.nav {
  font-size: 2.4rem;
  padding-left: 56px;
  text-decoration: none;
}
@media screen and (max-width: 480px) {
  .nav-wapper {
    display: flex;
    justify-content: center;
    margin: 40px 24px 0 0;
  }
  .nav {
    font-size: 2rem;
    padding-left: 20px;
  }
}
</style>