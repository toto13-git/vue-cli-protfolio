<template>
  <div class="triangle">
    <div class="wrapper">
      <div class="titel">
        <h1>Portfolio</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  margin: 0 0 0 120px;
}
.titel {
  margin: auto 0;
}
h1 {
  font-size: 8rem;
  margin: 0;
}
.triangle {
  padding: 300px 0;
  background: 
  /* linear-gradient(to top right, #606cef 25%, transparent 25.1%) 0%
      80% no-repeat,
    linear-gradient(to bottom right, #606cef 25%, transparent 25.1%) 0% 180%
      no-repeat, */ linear-gradient(
        to top left,
        #606cef 25%,
        transparent 25.1%
      )
      100% 0% no-repeat,
    linear-gradient(to bottom left, #606cef 25%, transparent 25.1%) 100% 100%
      no-repeat;
  background-size: 50% 50%;
}
@media screen and (max-width: 480px) {
  .wrapper {
    margin: 0 0 0 24px;
  }
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  .triangle {
    padding: 180px 0;
    background: linear-gradient(to top left, #606cef 25%, transparent 25.3%)
        100% 0% no-repeat,
      linear-gradient(to bottom left, #606cef 25%, transparent 25.3%) 100% 100%
        no-repeat;
    background-size: 50% 50%;
  }
}
</style>