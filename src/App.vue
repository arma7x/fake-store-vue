<template>
  <h1 class="text-center mt-2">Fake Store</h1>
  <div v-if="loading" class="d-flex flex-column justify-content-center align-items-center" style="height:90vh;">
    <div class="spinner-grow text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <router-view v-else/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import store from './store'

export default defineComponent({
  // type inference enabled,
  data() {
    return {
      loading: false,
      unsubscribe: () => {1},
    }
  },
  mounted() {
    this.unsubscribe = store.subscribe((mutation, state) => {
      if (mutation.type === 'setLoading') {
        this.loading = mutation.payload
      }
    })
  },
  unmounted() {
    this.unsubscribe();
  }
})

</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
