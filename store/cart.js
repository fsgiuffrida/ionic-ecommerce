import Cookies from 'js-cookie'

const state = () => ({
        items: []
    })
  
const mutations = {
    setItems(state, items) {
        state.items = items
      },

    add (state, item) {

        const record = state.items.find(i => i.id === item.id)
        
        if (!record) {
            state.items.push({
                ...item
            })
        } else {
            record.quantity = record.quantity + item.quantity
        }

        Cookies.set('cart', state.items)
    },

    remove (state, id) {
        state.items = state.items.filter(item => item.id !== id)

        Cookies.set('cart', state.items)
    }
}

const getters = {
    items: state => {
      return state.items
    },

    // totalPrice : state => {
    //     let finalPrice = 0
    //     for (let item of state.items) {
    //         finalPrice = finalPrice + ((item.price - ((item.price * item.descount)/100)) * item.quantity)
    //     }
    //     return finalPrice.toFixed(2)
    // },

    // totalQuantity : state => {
    //     let totalQuantity = 0
    //     for (let item of state.items){
    //         totalQuantity = totalQuantity + item.quantity
    //     }
    //     return totalQuantity
    // }
} 

const cartModule = {
    state,
    mutations,
    getters
  }
  export default cartModule;