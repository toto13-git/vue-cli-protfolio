<template>
  <div id="footer">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Copyright © 2020 toto13 . All Rights Reserved."
    };
  }
};
</script>

<style scoped>
#footer {
  height: 32px;
  width: 100%;
  margin-top: auto;
  background: aliceblue;
  text-align: center;
  line-height: 32px;
  color: #999;
}
p {
  line-height: 32px;
  opacity: 0.5;
  margin: 0;
}
</style>
