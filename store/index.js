import cartModule from './cart';
import {createStore} from 'vuex';
 
const store = createStore({
    modules:{
        cart: cartModule,
    }
});
 
export default store;