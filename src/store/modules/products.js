import shop from '@/api/shop'
export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        availableProducts(state, getters) {
            return state.items.filter(product => product.inventory > 0)
        },
        productIsInStock() {
            return (product) => {
                return product.inventory > 0
            }
        }
    },
    mutations: { // alter state
        setProducts(state, items) {
            //update products
            state.items = items
        },
        decrementProductInventory(state, product) {
            product.inventory--
        },
    },
    actions: {
        fetchProducts({ commit }) {
            return new Promise((resolve, reject) => {
                //make the call
                // run setProducts mutation
                shop.getProducts((items) => {
                    commit("setProducts", items);
                    resolve()
                });
            })
        },
    }
}