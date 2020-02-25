<template>
  <div>
    <button @click="addTo()">Add To Cart</button>
  </div>
</template>
<script>
export default {
  props: {
    id: {},
    name: {},
    price: {},
    category: {}
  },
  data() {
    return {
      carItem: {
        id: this.id,
        name: this.name,
        price: this.price,
        category: this.category,
        quantity: 1
      }
    };
  },
  methods: {
    addTo() {
      this.$store.dispatch("addToCart", this.carItem);
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  button {
    display: block;
    height: 2.5rem;
    margin: 1rem auto;
  }
}
</style>