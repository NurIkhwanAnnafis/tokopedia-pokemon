/* eslint-disable import/no-anonymous-default-export */
import { applyMiddleware, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';

import rootReducer from '.';

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;