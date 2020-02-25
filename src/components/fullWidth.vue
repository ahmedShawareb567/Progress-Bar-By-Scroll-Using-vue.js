<template>
  <div class="fullWidth">
    <p class="widthEl" ref="fullWid"></p>
    <p v-show="widthData">{{ this.$store.getters.getWidth }}</p>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("getWidth");
  },
  mounted() {
    this.updateWidth();
  },
  updated() {
    this.updateWidth();
  },
  data() {
    return {
      widthData: false
    };
  },
  computed: {
    fullWidth() {
      return this.$store.getters.getWidth;
    }
  },
  methods: {
    updateWidth() {
      this.$refs.fullWid.style.width = this.$store.getters.getWidth + "%";
    }
  }
};
</script>
<style lang="scss" scoped>
.widthEl {
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 0%;
  height: 0.25rem;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffcc00+0,cc0066+48,66cccc+92 */
  background: #ffcc00; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #ffcc00 0%,
    #cc0066 48%,
    #66cccc 92%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    #ffcc00 0%,
    #cc0066 48%,
    #66cccc 92%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    #ffcc00 0%,
    #cc0066 48%,
    #66cccc 92%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffcc00', endColorstr='#66cccc',GradientType=1 ); /* IE6-9 */

  margin: 0rem;
  transition: width 0.3s ease-in-out;
}
</style>
