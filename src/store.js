import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart.slice";
import reducer from "./features/order/order.slice";





const store = configureStore({

    reducer:{
        order:reducer,
        cart:cartReducer,
    }

})



export default store