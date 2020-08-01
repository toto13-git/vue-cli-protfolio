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
  line-height: 32px;

  width: 100%;
  height: 32px;
  margin-top: auto;

  text-align: center;

  color: #606cef;
}
p {
  line-height: 32px;

  margin: 0;
}
</style>
