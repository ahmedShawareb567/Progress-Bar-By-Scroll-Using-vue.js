import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFullPage from "vue-fullpage.js";
import i18n from "./i18n";

Vue.use(VueFullPage);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }
  i18n.locale = language;
  next();
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
