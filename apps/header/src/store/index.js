import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

// export default function configureStore() {
//  return createStore(
//   rootReducer,
//    applyMiddleware(thunk)
//  );
// }

const persistConfig = {
  key: 'header',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  const store = createStore(persistedReducer,applyMiddleware(thunk))
  const persistor = persistStore(store)
  return { store, persistor }
}