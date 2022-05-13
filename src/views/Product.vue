<template>
  <div class="product">
    <h1>This is product page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FakeStore } from '../api';

export default defineComponent({
  // type inference enabled
  props: {
    id: String
  },
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    FakeStore.getProduct(this.id)
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.error(err);
    });
  }
})
</script>
