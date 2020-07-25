<template>
  <div class="wrapper">
    <div class="production">
      <h1>Production</h1>

      <div class="top-text">
        <div class="num-container">
          <p>
            <span class="num-container__num">
              Production_
              <span class="num-container__num-big">01</span>
            </span>
          </p>
        </div>

        <div class="text">
          <h2>ボウリングアプリ</h2>
          <p>ボウリングが趣味なのでどこに転がせばスペアを取ることができるのかすぐに分かるアプリを開発しました。制作期間２週間。webアプリを１から初めて自力で作成しました。 jQueryに興味があったので動きのあるサイトを目指して作成しました。</p>
        </div>
      </div>
      <div class="text-box">
        <img class="photo" :src="image_bowling" alt="画像" />
        <div class="info-box">
          <div class="info">
            <ul>
              <li>
                <h4>プログラミング言語</h4>
              </li>
              <li>Ruby 2.6.3p62</li>
              <li>Rails 5.2.4.1</li>
              <li>jquery-rails 1.12.4</li>
              <li>HTML/CSS</li>
              <li>Sass</li>
            </ul>
            <ul>
              <li>
                <h4>デプロイ</h4>
              </li>
              <li>Heroku</li>
            </ul>
          </div>

          <div class="link">
            <a :href="gitBowlingUrl.href">
              <img :src="image_gitHub" alt="画像" />
            </a>
            <br />
            <a :href="bowlingUrl.href">ボウリングアプリへ</a>
          </div>
        </div>
      </div>

      <div class="top-text2">
        <div class="text2">
          <h2>備蓄アプリ</h2>
          <p>
            コロナの影響で買いだめをするようになり、備蓄品を管理できれば便利だと思い作成しました。賞味期限までの残り日数を知ることができます。
            <br />下のE-Mail、Passwordでログインできます。新規登録も可能です。
            <br />
            <br />E-Mail：bbb@bbb.com
            <br />Password：12345678
            <br />
          </p>
        </div>
      </div>
      <div class="text-box2">
        <img class="photo" :src="image_bitiku" alt="画像" />
        <div class="info-box">
          <div class="info">
            <ul>
              <li>
                <h4>プログラミング言語</h4>
              </li>
              <li>Laravel 5.8.38</li>
              <li>PHP 7.1.23</li>
              <li>jquery-rails 1.12.4</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>bootstrap 4.0.0</li>
            </ul>
            <ul>
              <li>
                <h4>デプロイ</h4>
              </li>
              <li>Heroku</li>
            </ul>
          </div>
          <div class="link">
            <a :href="gitBitikuUrl.href">
              <img :src="image_gitHub" alt="画像" />
            </a>
            <br />
            <a :href="bitikuUrl.href">備蓄アプリへ</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_gitHub: require("../assets/GitHub-Mark-32px.png"),
      image_bowling: require("../assets/bw.png"),
      image_bitiku: require("../assets/biti.png"),
      bowlingUrl: {
        href: "https://bowling-pin.herokuapp.com/",
      },
      gitBowlingUrl: {
        href: "https://github.com/toto13-git/bowling_app",
      },
      bitikuUrl: {
        href: "https://bitiku.herokuapp.com/",
      },
      gitBitikuUrl: {
        href: "https://github.com/toto13-git/task",
      },
    };
  },
};
</script>

<style scoped>
h4 {
  margin: 0 0 16px 0;
}
#nav a {
  opacity: 1;
}
.num-container {
}
.num-container__num {
  font-size: 1.6rem;
  border-bottom: solid 8px;
  padding-bottom: 8px;
}
.num-container__num-big {
  font-size: 3.6rem;
  font-weight: 600;
}

.photo {
  width: 50%;
  height: 288px;
  /* object-fit: cover; */
  object-fit: contain;
  /* height: auto; */
}
.top-text {
  width: 100%;
}
.text-box {
  display: flex;
  /* width: 100%; */
  width: 50%;
}
.top-text2 {
  width: 100%;
  margin-top: 80px;
}
.text2 {
  width: 50%;
  margin: 0 0 0 auto;
}
.text-box2 {
  margin: 0 0 0 auto;
  display: flex;
  /* width: 100%; */
  width: 50%;
}
.text {
  /* padding: 24px 0; */
  width: 50%;
  margin: 32px 0;
  /* display: flex; */
}
.info-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 0 0 auto;
}
.info {
  display: flex;
}
ul {
  margin: 0 0 0 40px;
  padding: 0;
  list-style: none;
}
li {
  font-size: 1.6rem;
  line-height: 24px;
}

.link {
  margin: auto 0 0 40px;
  text-align: end;
}
</style>
