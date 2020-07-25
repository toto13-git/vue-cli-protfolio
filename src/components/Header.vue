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
.header {
  height: 40px;
  width: 100%;
}
.nav-wapper {
  text-align: right;
  margin-top: 40px;
  margin: 40px 80px 0 0;
}
.nav {
  font-size: 2.4rem;
  padding-left: 56px;
  text-decoration: none;
}
</style>