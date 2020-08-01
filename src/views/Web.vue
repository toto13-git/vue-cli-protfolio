<template>
  <div class="production">
    <div class="content">
      <div class="num">
        <div class="num-container">
          <p>
            <span class="num-container__num">
              Web_
              <span class="num-container__num--big">01</span>
            </span>
          </p>
        </div>

        <div class="main">
          <div class="photo-container">
            <img
              class="photo-container__photo"
              :src="image_bowling"
              alt="画像"
            />
          </div>

          <div class="info-container">
            <h2>ボウリングアプリ</h2>
            <p>
              ボウリングが趣味なのでどこに転がせばスペアを取ることができるのかすぐに分かるアプリを開発しました。制作期間２週間。webアプリを１から初めて自力で作成しました。
              jQueryに興味があったので動きのあるサイトを目指して作成しました。
            </p>

            <div class="info-container__info">
              <div>
                <div class="info-container__info--details">
                  <ul>
                    <li>
                      <h4>プログラミング</h4>
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
              </div>

              <div class="info-container__link">
                <div class="info-container__link--box">
                  <a :href="gitBowlingUrl.href">
                    <img class="git-icon" :src="image_gitHub" alt="画像" />
                  </a>
                  <br />
                  <a :href="bowlingUrl.href">ボウリングアプリへ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content2">
      <div class="num2">
        <div class="num-container">
          <p>
            <span class="num-container__num">
              Web_
              <span class="num-container__num--big">02</span>
            </span>
          </p>
        </div>

        <div class="main">
          <div class="photo-container">
            <img
              class="photo-container__photo"
              :src="image_bitiku"
              alt="画像"
            />
          </div>

          <div class="info-container">
            <h2>備蓄アプリ</h2>
            <p>
              コロナの影響で買いだめをするようになり、備蓄品を管理できれば便利だと思い作成しました。賞味期限までの残り日数を知ることができます。
              <br />下のE-Mail、Passwordでログインできます。新規登録も可能です。
            </p>
            <div class="info-container__info">
              <div>
                <div class="info-container__info--details">
                  <ul>
                    <li>
                      <h4>E-Mail</h4>
                    </li>
                    <li>bbb@bbb.com</li>
                    <li>
                      <h4>Password</h4>
                    </li>
                    <li>12345678</li>
                  </ul>
                  <ul>
                    <li>
                      <h4>プログラミング</h4>
                    </li>
                    <li>Laravel 5.8.38</li>
                    <li>PHP 7.1.23</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>bootstrap 4.0.0</li>
                  </ul>
                  <ul class="deploy-ul">
                    <li>
                      <h4>デプロイ</h4>
                    </li>
                    <li>Heroku</li>
                  </ul>
                </div>
              </div>

              <div class="info-container__link">
                <div class="info-container__link--box">
                  <a :href="gitBitikuUrl.href">
                    <img class="git-icon" :src="image_gitHub" alt="画像" />
                  </a>
                  <br />
                  <a :href="bitikuUrl.href">備蓄アプリへ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="num">
        <div class="num-container">
          <p>
            <span class="num-container__num">
              Web_
              <span class="num-container__num--big">03</span>
            </span>
          </p>
        </div>

        <div class="main">
          <div class="photo-container">
            <img
              class="photo-container__photo"
              :src="image_fmarket"
              alt="画像"
            />
          </div>

          <div class="info-container">
            <h2>フリーマーケットアプリ</h2>
            <p>
              TECH::EXPARTの卒業課題、フリーマーケットアプリを５人チームで４週間で開発いたしました。マイページ、プロフィール、商品購入の実装を担当しました。ページの確認に認証が必要となります。
            </p>

            <div class="info-container__info">
              <div>
                <div class="info-container__info--details">
                  <ul>
                    <li>
                      <h4>ユーザー名</h4>
                    </li>
                    <li>admin</li>
                    <li>
                      <h4>Password</h4>
                    </li>
                    <li>password</li>
                  </ul>
                  <ul>
                    <li>
                      <h4>プログラミング</h4>
                    </li>
                    <li>Ruby 2.5.1p57</li>
                    <li>Rails 5.2.3</li>
                    <li>jquery-rails 1.12.4</li>
                    <li>HTML/CSS</li>
                    <li>Sass</li>
                  </ul>
                  <ul>
                    <li>
                      <h4>デプロイ</h4>
                    </li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>

              <div class="info-container__link">
                <div class="info-container__link--box">
                  <a :href="gitFmarketUrl.href">
                    <img class="git-icon" :src="image_gitHub" alt="画像" />
                  </a>
                  <br />
                  <a :href="fmarketkuUrl.href">フリーマッケトアプリへ</a>
                </div>
              </div>
            </div>
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
      image_gitHub: require("../assets/logo/GitHub-Mark-32px.png"),
      image_bowling: require("../assets/production/bw.png"),
      image_bitiku: require("../assets/production/biti.png"),
      image_fmarket: require("../assets/production/fm.jpg"),

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
      fmarketkuUrl: {
        href: "http://18.177.15.224/",
      },
      gitFmarketUrl: {
        href: "https://github.com/toto13-git/freemarket_sample_62c",
      },
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 152px;
}
h4 {
  margin-bottom: 8px;
}
ul {
  margin: 0 40px 0 0;
  padding: 0;

  list-style: none;
}
li {
  font-size: 1.6rem;
  line-height: 24px;
}
#nav a {
  opacity: 1;
}
.num {
  width: 100%;
}
.num-container__num {
  font-size: 2rem;

  padding-bottom: 8px;

  border-bottom: solid 8px;
}
.num-container__num--big {
  font-size: 3.6rem;
  font-weight: 600;
}
.main {
  display: flex;

  width: 1160px;
  height: 408px;

  background-color: #faf9f8;
  box-shadow: 16px 16px rgb(0, 0, 0, 0.2);
}
.photo-container {
  margin-left: 80px;
}
.photo-container__photo {
  width: 440px;
  height: 376px;
  margin-top: 16px;

  box-shadow: 16px 16px #ffdd50;

  object-fit: contain;
}
.info-container {
  margin: auto 40px;
}
.info-container__info {
  display: flex;
}
.info-container__info--details {
  display: flex;
}
.font-b {
  font-weight: 600;
}
.deploy-ul {
  margin: 0;
}
.info-container__link {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin: 0 0 0 auto;
}
.info-container__link--box {
  margin: auto 0 0 40px;

  text-align: end;
}
.git-icon {
  margin-bottom: 8px;
}
.content2 {
  width: 100%;
}
.num2 {
  width: 70%;
  margin: 176px 0 80px auto;
}

@media screen and (max-width: 1700px) {
  .num2 {
    width: 90%;
  }
}
@media screen and (max-width: 1330px) {
  h1 {
    margin-bottom: 80px;
  }
  .num2 {
    margin: 104px 0 80px 0;
  }
}
@media screen and (max-width: 1230px) {
  .production {
    width: 100%;
  }
  .num {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
  .main {
    display: block;

    width: 100%;
    height: 100%;
    margin: 0 auto 80px;
  }
  .photo-container {
    width: 100%;
    height: 100%;
    margin-left: 0;

    text-align: center;
  }
  .photo-container__photo {
    width: 50%;
    height: 50%;
    margin: 32px;
  }
  .info-container {
    padding-bottom: 40px;
  }
  .num2 {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
  ul {
    margin: 0 16px 0 0;
  }
  .info-container__link--box {
    margin: auto 0 0 16px;

    text-align: end;
  }
  @media screen and (max-width: 896px) {
    .num {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    .main {
      display: block;

      width: 100%;
      height: 100%;
    }
    .info-container__info {
      display: block;
    }
    .info-container__info--details {
      display: block;
    }
    .num2 {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      margin-bottom: 40px;
    }
    .wrapper {
      margin: 24px;
    }
  }
}
</style>
