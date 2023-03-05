import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../redux/filtersSlice";
import { contactsReducer } from "../redux/contactsSlice";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedContactReducer = persistReducer(
    persistConfig, contactsReducer
);

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: filtersSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
