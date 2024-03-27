import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

export const store = configureStore ({
    reducer : {
        cart: cartReducer
    }
})

export type Rootstate = ReturnType <typeof store.getState>
export type AddDispatch = typeof store.dispatch