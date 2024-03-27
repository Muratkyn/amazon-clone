import { createSlice } from "@reduxjs/toolkit";

interface Product {
products: string[] 
productsNumber: number,

}
const initialState : Product = {
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const addProductExists = state.products.find(
                (product) => product.id === action.payload.id
              );
              if (addProductExists) {
                addProductExists.quantity += parseInt(action.payload.quantity);
              } else {
                state.products.push({
                  ...action.payload,
                  quantity: parseInt(action.payload.quantity),
                });
              }
            
            console.log(action.payload)
            state.productsNumber += 1;
            state.products.push({...action.payload});
        },
        removeFromCart : (state,action) => {

        }
    }
})


export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer