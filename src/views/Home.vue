<template>
  <div class="container">
    <div class="container">
      <button class="btn btn-sm btn-primary mb-2" @click="fetchProducts">Refresh</button>
      <div class="row justify-content-md-center">
        <div v-for="product in products" :key="product.id" class="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <ProductCard :id="product.id" :title="product.title" :image="product.image" :price="product.price" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ProductCard from '@/components/ProductCard.vue'; // @ is an alias to /src
import { FakeStore } from '../api';
import store from '../store'

export default defineComponent({
  // type inference enabled,
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    document.title = "Fake Store";
    if (store.state.products.length > 0) {
      this.products = store.state.products
    } else {
      this.fetchProducts()
    }
  },
  methods: {
    fetchProducts() {
      store.commit('setLoading', true)
      this.products = []
      FakeStore.getProducts()
      .then((products) => {
        this.products = products
        store.commit('storeProducts', products)
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        store.commit('setLoading', false)
      })
    }
  }
})
</script>
