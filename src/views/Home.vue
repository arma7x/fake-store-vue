<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-md-center">
        <div v-for="product in products" :key="product.id" class="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div class="card" style="height:100%;">
            <img class="card-img-top" :src="product.image" :alt="product.title" style="height:350px;;object-fit:cover;object-position:center;">
            <div class="card-body">
              <h5 class="card-title font-weight-bold" style="text-align:right!important;">MYR {{ product.price }}</h5>
              <p class="card-text">{{ product.title }}</p>
              <router-link :to="{ name: 'Product', params: {id: product.id } }" class="btn btn-primary">Detail</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { FakeStore } from '../api';

export default defineComponent({
  // type inference enabled,
  components: {
    // HelloWorld,
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    console.log('Home Mounted');
    FakeStore.getProducts()
    .then((products) => {
      this.products = products;
    })
    .catch((err) => {
      console.error(err);
    });
  }
})
</script>
