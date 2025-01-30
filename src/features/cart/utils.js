



const getIndex = function(state,action){
 return state.items.findIndex((items)=> items.id === action.payload.id);
 
}




export {getIndex}