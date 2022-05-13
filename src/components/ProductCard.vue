<template>
  <div class="card shadow-sm bg-white rounded" style="height:100%;">
    <img class="card-img-top" :src="image" :alt="title" style="height:350px;object-fit:cover;object-position:center;" />
    <div class="card-body">
      <div class="row d-flex justify-content-between">
        <div class="col"><router-link :to="{ name: 'Product', params: {id: id } }" class="btn btn-primary">Detail</router-link></div>
        <div class="col"><h5 class="font-weight-bold" style="text-align:right!important;">MYR {{ price.toFixed(2) }}</h5></div>
      </div>
      <p class="card-title mt-2">{{ title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  props: {
    id: [String, Number],
    title: String,
    image: String,
    price: [Number]
  }
})
export default class ProductCard extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
