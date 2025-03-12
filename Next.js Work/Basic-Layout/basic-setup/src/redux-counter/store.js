"use client"
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './counter/exampleSlice';
import todoReducer from './todo/todoSlice';
import productReducer from './curd/postSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer, 
    todos:  todoReducer,
    product: productReducer,
  },
});

export default store;
