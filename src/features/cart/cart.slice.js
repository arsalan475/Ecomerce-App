import { createSlice } from "@reduxjs/toolkit";
import { getIndex } from "./utils";
import { getItemsInLocalStorage, setItemsInLocalStorage } from "../../hooks/useLocalStorage";


const items = getItemsInLocalStorage('cartItems')
const total = getItemsInLocalStorage('total')

const initialState = {
    total,
   items:   items != null ? [...items] : []
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: function(state,action){
                state.total++;
              
               const index = getIndex(state,action)
               
               if(index === -1){
                      state.items.unshift(action.payload)
                }else{
                    state.items[index].quantity++
                    state.items[index].defaultSize = action.payload.defaultSize ? action.payload.defaultSize : state.items[index].defaultSize
                    state.items[index].defaultColor = action.payload.defaultColor ?  action.payload.defaultColor : state.items[index].defaultColor
                }
               setItemsInLocalStorage('total',state.total)
                setItemsInLocalStorage('cartItems',state.items)
            },


            controlQuantity:function(state,action){
                const index = state.items.findIndex(items=> items.id === action.payload.id )
               
                state.items[index].quantity = action.payload.value

                // below line do nothing more than  just doing two functionallity in one 
                // this controll Quantities function is responsible for controlling 
                // both increasing and decreasing functionality

                state.total = state.items.reduce((acc, curr) => acc + curr.quantity,0)

                setItemsInLocalStorage('total',state.total)

                setItemsInLocalStorage('cartItems',state.items)


            },
            editCartDetails:function(state,action){
                    const index = getIndex(state,action)

                    state.items[index].defaultSize = action.payload.size ? action.payload.size : state.items[index].defaultSize
                    state.items[index].defaultColor = action.payload.color ?  action.payload.color : state.items[index].defaultColor

                    setItemsInLocalStorage('cartItems',state.items)

            },


            deleteCartItem:function(state,action){
                const index = getIndex(state,action)
                state.total -= state.items[index].quantity
             state.items.splice(index,1)

             setItemsInLocalStorage('total',state.total)

             setItemsInLocalStorage('cartItems',state.items)

        },
           

            makeCartEmpty : function(state,action){
                state.items = [];
                state.total = 0
                setItemsInLocalStorage('total',state.total)

                setItemsInLocalStorage('cartItems',state.items)
            }
    }
})



export default cartSlice.reducer;

 export const {addToCart,controlQuantity,editCartDetails,deleteCartItem,makeCartEmpty} = cartSlice.actions