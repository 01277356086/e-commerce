import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./Cart-slice";
import productsSlice from "./products-slice";

const Store =configureStore({
    reducer: {
        
        products:productsSlice,
        cart:cartSlice,

    }
})
export default Store;