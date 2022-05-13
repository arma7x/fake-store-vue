/* eslint-disable */

import { createStore } from 'vuex'

interface LooseObject {
  [key: string]: any
}

export default createStore({
  state: {
    loading: false,
    products: [],
    productsRegistry: {} as LooseObject
  },
  mutations: {
    setLoading (state, n) {
      state.loading = n
      if (state.loading) {
        document.body.style.cursor='wait'
      } else {
        document.body.style.cursor='default'
      }
    },
    storeProducts (state, n) {
      state.products = n
    },
    pushProductsRegistry (state, n) {
      state.productsRegistry[n.id] = n
    }
  },
  actions: {
  },
  modules: {
  }
})
