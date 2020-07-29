<template>
  <div id="footer">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Copyright © 2020 toto13 . All Rights Reserved.",
    };
  },
};
</script>

<style scoped>
#footer {
  height: 32px;
  width: 100%;
  margin-top: auto;
  text-align: center;
  line-height: 32px;
  color: #606cef;
}
p {
  line-height: 32px;
  margin: 0;
}
</style>
