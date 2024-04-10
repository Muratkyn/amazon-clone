import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number,
  quantity: string
} 

const initialState = {
    products: [] as any[],
    productsNumber: 0,
}

export const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction< Product >) => {
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
        },
        removeFromCart : (state,action: PayloadAction< Product>) => {
          const productToRemove = state.products.find(
            (product) => product.id === action.payload
          );
          
          state.productsNumber = state.productsNumber - productToRemove.quantity;
          
          const index = state.products.findIndex(
            (product) => product.id === action.payload
          );
          state.products.splice(index, 1);
          console.log(action.payload)

          // FILTERING THE ALL ELS THAT WOULDN MATCH THE ID, REFACTOR ALL AVOID MUTATION, PURE FUNCS
        },
        incrementCart: (state, action: PayloadAction< Product>) => {
          const itemInc = state.products.find((item) => item.id === action.payload);
          if (itemInc.quantity >= 1) {
            itemInc.quantity = itemInc.quantity + 1;
          }
          state.productsNumber = state.productsNumber + 1;
        },
        decrementCart: (state, action: PayloadAction< Product >) => {
          const itemDec = state.products.find((item) => item.id === action.payload);
          if (itemDec.quantity === 1) {
            const index = state.products.findIndex(
              (item) => item.id === action.payload
            );
            state.products.splice(index, 1);
          } else {
            itemDec.quantity--;
          }
          state.productsNumber = state.productsNumber - 1;
      },
    }
})


export const {addToCart, removeFromCart,incrementCart, decrementCart} = cartSlice.actions
export default cartSlice.reducer