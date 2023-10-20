import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from '../Reducers/AccountsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, accountsReducer);

const store = configureStore({
  reducer: {
    accounts: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };