import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import MainJson from "../jsonFileS/main.json";
export default new Vuex.Store({
  state: {
    widthOffset: 0,
    cart: [],
    products: MainJson.products ? MainJson.products : []
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getWidth(state) {
      return state.widthOffset;
    }
  },
  mutations: {
    getWidth(state) {
      window.addEventListener("scroll", () => {
        let windowScroll =
            document.body.scrollTop || document.documentElement.scrollTop,
          height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        state.widthOffset = (windowScroll / height) * 100;
      });
    }
  },
  actions: {
    addToCart({ state }, item) {
      let iterateElement = state.cart.find(element => {
        return element.id == item.id;
      });
      console.log(iterateElement);
      if (iterateElement) {
        iterateElement.quantity++;
      } else {
        state.cart.push(item);
      }
    }
  },
  modules: {}
});
