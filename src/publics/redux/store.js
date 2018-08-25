import { createStore, combineReducers, applyMiddleware} from "redux"
import middlewares from "./middleware.js"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import product from "./reducers/product.js";
import cart from "./reducers/cart.js";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}


const RootReducer = combineReducers({
	product,
	cart
})

const persistedReducer = persistReducer(persistConfig, RootReducer)

let store = createStore(persistedReducer, applyMiddleware(...middlewares))
let persistor = persistStore(store)
export {
   store,
   persistor 
}