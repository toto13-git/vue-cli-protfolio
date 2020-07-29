<template>
  <div class="wrapper">
    <div class="about">
      <h1>About</h1>
      <img :src="image_abter" alt="画像" />
      <p>名前/toto13</p>
      <p>1982年生まれ</p>
      <a :href="gitUrl.href">
        <img :src="image_gitHub" alt="画像" />
      </a>
      <p>経歴</p>
      <p>2011年〜2018年10月まで自動車部品のプラスチック成形機オペレーター兼生産管理職に従事</p>
      <p>2018年11月〜2019年9月まで食べログなどの飲食サイトの編集職に従事</p>
      <p>2019年10月〜12月までテックキャンプ(旧テックエキスパート)にてプログラミングを学習</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      image_abter: require("../assets/おにぎり.jpg"),
      image_gitHub: require("../assets/logo/GitHub-Mark-32px.png"),

      gitUrl: {
        href: "https://github.com/toto13-git",
      },
    };
  },
};
</script>

<style scoped>
#nav a {
  opacity: 1;
}
@media screen and (max-width: 480px) {
  .wrapper {
    margin: 24px;
  }
}
</style>
