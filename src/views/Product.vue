<template>
  <div class="product">
    <h1>This is product page</h1>
  </div>
</template>

import { defineComponent } from 'vue';
import { FakeStore } from '../api';

export default defineComponent({
  // type inference enabled
  props: {
    id: any
  },
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    console.log('Product Mounted');
    //FakeStore.getProduct()
    //.then((product) => {
      //console.log(product);
    //})
    //.catch((err) => {
      //console.error(err);
    //});
  }
})
