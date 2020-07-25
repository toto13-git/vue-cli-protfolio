<template>
  <div class="wrapper">
    <div class="about">
      <h1>プロフィール</h1>
      <img :src="image_abter" alt />
      <p>名前</p>
      <p>aaaaaa</p>
      <p>経歴</p>
      <p>aaaaaaaaaaaaa</p>
      <p></p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      image_abter: require("../assets/おにぎり.jpg")
    };
  }
};
</script>

<style scoped>
</style>
