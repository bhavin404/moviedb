'use client';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from './reducer/movieSlice';

const store = createStore(
    movieReducer,
    composeWithDevTools()
  );
  export default store;