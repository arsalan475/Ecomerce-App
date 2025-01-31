import { createSlice } from "@reduxjs/toolkit";
import { getItemsInLocalStorage, setItemsInLocalStorage } from "../../hooks/useLocalStorage";



const data = getItemsInLocalStorage('data')


const initialState = {
    orders: data != null ? [...data] : []
}


const orderSlice = createSlice({

    name:'order',
    initialState,
    reducers:{
            placeOrder:function(state,action){
                state.orders.push(action.payload);
                setItemsInLocalStorage('data',state.orders)

            },

            confirmOrder:function(state,action){
                const index = state.orders.findIndex((order)=> order.orderId === action.payload.id);

                state.orders[index].trackingId = action.payload.trackingId;
                state.orders[index].time = Date.now();
                state.orders[index].status = action.payload.status;
                setItemsInLocalStorage('data',state.orders)

            }
    }

})



export default orderSlice.reducer;

export const {placeOrder,confirmOrder} = orderSlice.actions