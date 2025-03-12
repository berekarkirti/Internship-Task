import { createSlice } from '@reduxjs/toolkit';
import { getProducts, editProducts, deleteProducts, addProducts } from './postthunk';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [], 
        status: 'idle', 
        error: null,
        // loading: 'true'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            // Get Products
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Edit Product
            .addCase(editProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedProduct = action.payload;
                const index = state.items.findIndex((item) => item.id === updatedProduct.id);
                if (index !== -1) {
                    state.items[index] = updatedProduct;
                }
            })
            .addCase(editProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Delete Product
            .addCase(deleteProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const id = action.payload;
                state.items = state.items.filter((item) => item.id !== id);
            })
            .addCase(deleteProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Add Product
            .addCase(addProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const newProduct = action.payload;
                state.items.push(newProduct);
            })
            .addCase(addProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
