import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        console.log(res);
        return res.data;
    }
);

