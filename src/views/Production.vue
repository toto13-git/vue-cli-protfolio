<template>
  <div class="triangle">
    <div class="wrapper">
      <div class="production">
        <h1>
          Production
          <router-link to="/production/web" class="nav">Web</router-link>
          <router-link to="/production/graphic" class="nav"
            >Graphic</router-link
          >
        </h1>
        <router-view></router-view>
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
.triangle {
  padding-bottom: 96px;

  background: linear-gradient(to top right, #606cef 25%, transparent 25.1%) 0
      30% no-repeat,
    linear-gradient(to bottom right, #606cef 25%, transparent 25.1%) 0 130%
      no-repeat,
    linear-gradient(to top left, #606cef 25%, transparent 25.1%) 100% 0
      no-repeat,
    linear-gradient(to bottom left, #606cef 25%, transparent 25.1%) 100% 100%
      no-repeat;
  background-size: 30% 50%;
}

h1 {
  margin-bottom: 152px;
}
.production {
  display: inline-block;
}
.nav {
  font-size: 2.4rem;

  padding-left: 56px;

  text-decoration: none;
}

@media screen and (max-width: 1330px) {
  h1 {
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 1230px) {
  .production {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    margin-bottom: 40px;
  }
  .wrapper {
    margin: 24px;
  }
  .triangle {
    background: linear-gradient(to top right, #606cef 25%, transparent 25.3%) 0
        30% no-repeat,
      linear-gradient(to bottom right, #606cef 25%, transparent 25.3%) 0 130%
        no-repeat,
      linear-gradient(to top left, #606cef 25%, transparent 25.3%) 100% 0
        no-repeat,
      linear-gradient(to bottom left, #606cef 25%, transparent 25.3%) 100% 100%
        no-repeat;
    background-size: 50% 50%;
  }
}
</style>
