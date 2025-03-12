"use client"
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './counter/exampleSlice';
import todoReducer from './todo/todoSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer, 
    todos:  todoReducer 
  },
});

export default store;
