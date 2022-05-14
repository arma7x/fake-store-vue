<template>
  <div class="container">
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col mb-2">
          <button class="btn btn-primary" @click="fetchProducts">Refresh</button>
        </div>
        <div class="col mb-2 d-grid d-flex justify-content-end">
          <div class="d-flex m-0">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="searchText" @input="searchProducts">
          </div>
        </div>
      </div>
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
      searchText: '',
      searchT: -1,
      products: []
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
      if (store.state.loading)
        return
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
    },
    searchProducts() {
      if (this.searchT > 0) {
        clearTimeout(this.searchT)
        this.searchT = -1
      }
      this.searchT = setTimeout(() => {
        if (store.state.products.length > 0 && this.searchText.length > 0) {
          const word = this.searchText.toLowerCase()
          this.products = []
          // eslint-disable-next-line
          this.products = store.state.products.filter((product: any) => {
            if (product.id.toString().toLowerCase().indexOf(word) > -1) {
              return true
            } else if (product.title.toLowerCase().indexOf(word) > -1) {
              return true
            } else if (product.category.toLowerCase().indexOf(word) > -1) {
              return true
            } else if (product.description.toLowerCase().indexOf(word) > -1) {
              return true
            }
            return false
          });
        } else {
          this.products = store.state.products
        }
      }, 500);
    }
  }
})
</script>
