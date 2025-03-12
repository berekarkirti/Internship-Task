"use client"
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './counter/exampleSlice';
import todoReducer from './todo/todoSlice';
import productsReducer from './curd/postSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer, 
    todos:  todoReducer,
    products: productsReducer,
  },
});

export default store;
