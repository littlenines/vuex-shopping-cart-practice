import { createStore } from 'vuex'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

export default createStore({
  state: {

  },
  getters: {
   
  },
  mutations: { // alter state
    
  },
  actions, // methods

  modules: {
    cart,
    products
  }
})
