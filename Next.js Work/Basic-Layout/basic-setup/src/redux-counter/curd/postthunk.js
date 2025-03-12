import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try 
    {
        const res = await axios.get('http://localhost:9091/books/get');
        console.log('Fetched Products:', res.data);
        return res.data;
    } 
    catch (error) 
    {
        console.error('Error in fetch:', error);
        throw error;
    }
});

export const editProducts = createAsyncThunk('products/editProducts', async (data) => {
    try 
    {
        const res = await axios.put('http://localhost:9091/books/edit', data);
        console.log('Edited Product:', res.data);
        return res.data;
    } 
    catch (error) 
    {
        console.error('Error in edit:', error);
        throw error;
    }
});

export const deleteProducts = createAsyncThunk('products/deleteProducts', async (id) => {
    console.log("Deleting ID:", id);
    try 
    {
        const res = await axios.delete(`http://localhost:9091/books/delete/${id}`);
        console.log('Deleted Product:', res.data);
        return id;
    } 
    catch (error) 
    {
        console.error('Error in delete :', error);
        throw error;
    }
});

export const addProducts = createAsyncThunk('products/addProducts', async (data) => {
    try 
    {
        const response = await axios.post('http://localhost:9091/books/create', data);
        console.log('Added Product:', res.data);
        return res.data;
    } 
    catch (error) 
    {
        console.error('Error in add:', error);
        throw error;
    }
});
