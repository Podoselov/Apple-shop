import persistStore from 'redux-persist/es/persistStore';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appleReducers from './reducers/appleReducers';
import { productsAPI } from '../API/productsAPI';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  appleReducers,
  [productsAPI.reducerPath]: productsAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsAPI.middleware),
});

const persistor = persistStore(store);

export { persistor };
export default store;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
