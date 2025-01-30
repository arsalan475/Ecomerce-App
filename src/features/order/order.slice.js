import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    orders: [],
}


const orderSlice = createSlice({

    name:'order',
    initialState,
    reducers:{
            placeOrder:function(state,action){
                state.orders.push(action.payload);
            },

            confirmOrder:function(state,action){
                const index = state.orders.findIndex((order)=> order.orderId === action.payload.id);

                state.orders[index].trackingId = action.payload.trackingId;
                state.orders[index].time = Date.now();
                state.orders[index].status = action.payload.status;

            }
    }

})



export default orderSlice.reducer;

export const {placeOrder,confirmOrder} = orderSlice.actions