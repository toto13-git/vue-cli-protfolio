<template>
  <div class="wrapper">
    <div class="skill">
      <h1>Skill</h1>
      <h2>デザインスキル</h2>
      <p class="skill-sub">
        デザイン専門学校から使用していますので一通りの基礎操作が可能です。
      </p>

      <ul class="skill-ul">
        <div class="skill-container">
          <li class="skill-li">
            <img :src="image_photoshop" alt="画像" />
            <div class="skill-li-name">Photoshop</div>
          </li>
          <li class="skill-li">
            <img :src="image_illustrator" alt="画像" />
            <div class="skill-li-name">Illustrator</div>
          </li>
        </div>
      </ul>
      <hr />
      <p class="skill-sub">以下は独学で学びました。</p>
      <ul class="skill-ul">
        <div class="skill-container">
          <li class="skill-li">
            <img :src="image_xd" alt="画像" />
            <div class="skill-li-name">XD</div>
          </li>
        </div>
      </ul>

      <hr />

      <h2>プログラミングスキル</h2>
      <p class="skill-sub">
        プログラミングスクールでフロントエンドやサーバーサイドの基礎を学びました。
      </p>

      <ul class="skill-ul">
        <div class="skill-container">
          <li class="skill-li">
            <img :src="image_html" alt="画像" />
            <div class="skill-li-name">HTML</div>
          </li>
          <li class="skill-li">
            <img :src="image_css" alt="画像" />
            <div class="skill-li-name">CSS</div>
          </li>
          <li class="skill-li">
            <img :src="image_sass" alt="画像" />
            <div class="skill-li-name">Sass</div>
          </li>
          <li class="skill-li">
            <img :src="image_js" alt="画像" />
            <div class="skill-li-name">JavaScript</div>
          </li>
          <li class="skill-li">
            <img :src="image_jQuery" alt="画像" />
            <div class="skill-li-name">jQuery</div>
          </li>
          <li class="skill-li">
            <img :src="image_ruby" alt="画像" />
            <div class="skill-li-name">Ruby</div>
          </li>
          <li class="skill-li">
            <img :src="image_rails" alt="画像" />
            <div class="skill-li-name">Ruby on Rails</div>
          </li>
        </div>
      </ul>

      <hr />

      <p class="skill-sub">以下は独学で学びました。</p>
      <ul class="skill-ul">
        <div class="skill-container">
          <li class="skill-li">
            <img :src="image_php" alt="画像" />
            <div class="skill-li-name">PHP</div>
          </li>
          <li class="skill-li">
            <img :src="image_laravel" alt="画像" />
            <div class="skill-li-name">Laravel</div>
          </li>
          <li class="skill-li">
            <img :src="image_vue" alt="画像" />
            <div class="skill-li-name">Vue.js</div>
          </li>
          <li class="skill-li">
            <img :src="image_vuecli" alt="画像" />
            <div class="skill-li-name">Vue CLI</div>
          </li>
        </div>
      </ul>
      <hr />
      <h2>今後習得したいスキル</h2>
      <p class="skill-sub">
        webデザインの幅を広げたいので、モーショングラフィックスと動画編集の学習をしたいと考えております。
      </p>
      <ul class="skill-ul">
        <div class="skill-container">
          <li class="skill-li">
            <img :src="image_ae" alt="画像" />
            <div class="skill-li-name">After Effects</div>
          </li>
          <li class="skill-li">
            <img :src="image_pr" alt="画像" />
            <div class="skill-li-name">Premiere Pro</div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_photoshop: require("../assets/logo/ps.svg"),
      image_illustrator: require("../assets/logo/Ai.svg"),
      image_html: require("../assets/logo/HTML5.svg"),
      image_css: require("../assets/logo/CSS3.svg"),
      image_js: require("../assets/logo/js.svg"),
      image_jQuery: require("../assets/logo/jquery-icon.svg"),
      image_ruby: require("../assets/logo/ruby.svg"),
      image_rails: require("../assets/logo/Rails.svg"),
      image_sass: require("../assets/logo/sass-1.svg"),
      image_php: require("../assets/logo/php.png"),
      image_laravel: require("../assets/logo/laravel-2.svg"),
      image_vue: require("../assets/logo/vue.svg"),
      image_xd: require("../assets/logo/xd.svg"),
      image_ae: require("../assets/logo/ae.svg"),
      image_pr: require("../assets/logo/pr.svg"),
      image_vuecli: require("../assets/logo/vuecli.svg"),
    };
  },
};
</script>

<style scoped>
ul {
  font-size: 1.6rem;

  padding: 0;

  list-style: none;
}
li {
  margin-bottom: 2.4rem;
}
img {
  display: block;

  width: 48px;
  margin: 0 auto;
}
h2 {
  margin-bottom: 24px;
}
hr {
  margin-bottom: 24px;
}
.skill-sub {
  margin-bottom: 24px;
}
.skill-container {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
}
.skill-li {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 25%;
  height: 80px;
}
.skill-li-name {
  margin-top: auto;

  text-align: center;
}
@media screen and (max-width: 480px) {
  .wrapper {
    margin: 24px;
  }
  li {
    margin-right: 16px;
  }
  img {
    width: 80%;
  }
  .skill-li {
    height: 100px;
  }
}
</style>
