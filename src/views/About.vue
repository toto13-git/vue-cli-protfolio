<template>
  <div class="wrapper">
    <div class="about">
      <h1>About</h1>
      <div class="about__container">
        <img class="about__container-abter" :src="image_abter" alt="画像" />
        <ul>
          <li>
            名前/
            <span>toto13</span>
          </li>
          <li>1982年生まれ</li>
          <li class="git-icon">
            <a :href="gitUrl.href">
              <img :src="image_gitHub" alt="画像" />
            </a>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <span>経歴</span>
        </li>
        <li>2011年〜2018年10月まで自動車部品のプラスチック成形機オペレーター兼生産管理職に従事</li>
        <li>2018年11月〜2019年9月まで食べログなどの飲食サイトの編集職に従事</li>
        <li>2019年10月〜12月までテックキャンプ(旧テックエキスパート)にてプログラミングを学習</li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      image_abter: require("../assets/abter.gif"),
      image_gitHub: require("../assets/logo/GitHub-Mark-32px.png"),

      gitUrl: {
        href: "https://github.com/toto13-git",
      },
    };
  },
};
</script>

<style scoped>
span {
  font-size: 2rem;
  font-weight: 600;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  font-size: 1.6rem;
  line-height: 32px;
}
#nav a {
  opacity: 1;
}
.about__container {
  display: flex;
}
.about__container-abter {
  width: 200px;
  /* height: 100px; */
  margin: 0 32px 32px 0;
}

.git-icon {
  text-align: end;
}
@media screen and (max-width: 480px) {
  .wrapper {
    margin: 24px;
  }
}
</style>
