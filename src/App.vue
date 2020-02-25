<template>
  <div id="app">
    <full-width />
    <div class="scrollContent">
      <h3>Scroll The page</h3>
      <h4>Progress Bar with Scroll .. :)</h4>
    </div>
    <div class="smileSec">
      <h5>:)</h5>
    </div>
  </div>
</template>
<script>
import FullWidth from "./components/fullWidth.vue";
export default {
  created() {},
  updated() {},
  mounted() {},
  destroyed() {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    FullWidth
  }
};
</script>
<style lang="scss">
html {
  font: normal 1rem sans-serif;
}
body {
  box-sizing: border-box;
  -o-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 0rem;
  margin: 0rem;
  height: 2000px;
  .scrollContent {
    position: fixed;
    width: 50%;
    height: auto;
    background-color: transparent;
    padding-top: 7rem;
    padding-left: 2rem;
    h3 {
      font-size: 4rem;
      margin: 0rem;
      font-weight: bold;
    }
    h4 {
      font-size: 1rem;
    }
  }
  .smileSec {
    position: fixed;
    right: 5rem;
    top: 8rem;
    h5 {
      font-size: 7rem;
    }
  }
}
</style>
