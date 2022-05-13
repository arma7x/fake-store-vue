<template>
  <div class="container">
    <button class="btn btn-sm btn-primary mb-2" @click="goBack">Return</button>
    <div v-if="ready" class="row">
      <div class="col col-12 col-md-5 p-2">
        <img class="img-fluid" :src="product.image" :alt="product.title"/>
      </div>
      <div class="col col-12 col-md-7">
        <h5>#{{ product.id }}</h5>
        <h1 class="mb-2">{{ product.title }}</h1>
        <h5 class="mb-3">{{ product.description }}</h5>
        <h5 class="mb-3">Category: <span class="text-uppercase">{{ product.category }}</span></h5>
        <h3 class="price-tag">MYR {{ product.price.toFixed(2) }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FakeStore } from '../api';
import store from '../store'
import router from '../router'

export default defineComponent({
  // type inference enabled
  props: {
    id: String
  },
  data() {
    return {
      ready: false,
      product: {}
    }
  },
  mounted() {
    const cached = store.state.productsRegistry[this.id || '1']
    if (cached != null) {
      this.ready = true
      this.product = cached
      return
    }
    document.title = "Fake Store";
    store.commit('setLoading', true)
    FakeStore.getProduct(this.id || '1')
    .then((product) => {
      this.ready = true
      document.title = product.title;
      store.commit('pushProductsRegistry', product)
      console.log(product);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      store.commit('setLoading', false)
    })
  },
  methods: {
    goBack() {
      router.back()
    }
  }
})
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .price-tag {
    font-weight: bold!important;
  }
</style>
