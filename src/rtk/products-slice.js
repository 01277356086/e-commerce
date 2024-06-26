import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchproducts = createAsyncThunk("productslice/fetchproducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})

const productslice = createSlice({
    initialState: [],
    name: 'productslice',
    reducers: {},
    extraReducers: (buildr) => {
        buildr.addCase(fetchproducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const { } = productslice.actions;
export default productslice.reducer;