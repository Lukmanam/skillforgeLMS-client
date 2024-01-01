
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {persistStore} from 'redux-persist'
import {configureStore} from "@reduxjs/toolkit"
import {combineReducers} from "@reduxjs/toolkit"
import studentReducer from './slices/studentslice'
import adminReducer from "./slices/adminSlice"
import instructorReducer from './slices/instructorSlice'


const persistConfig = { key: 'root', storage, version: 1 };
const reducer = combineReducers({
  studentReducer,
  adminReducer,
  instructorReducer
  

})
const persistedReducer = persistReducer(persistConfig,reducer)
const store = configureStore({
  reducer:persistedReducer
})
const persistor = persistStore(store)

export {store,persistor}