<template>
  <div class="switcherLang">
    <p>{{ $i18n.locale.toUpperCase() }}</p>
    <ul>
      <li>
        <a href="#" @click.prevent="setLocale('en')">En</a>
      </li>
      <li>
        <a href="#" @click.prevent="setLocale('fr')">FR</a>
      </li>
      <li>
        <a href="#" @click.prevent="setLocale('ci')">CI</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.switcherLang {
  position: relative;
  float: right;
  width: 100%;
  height: auto;
  ul {
    position: absolute;
    top: 0rem;
    left: 4rem;
    background-color: #fff;
    list-style: none;
    padding: 0rem;
  }
}
</style>
