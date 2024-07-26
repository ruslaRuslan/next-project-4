import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { basketReducer } from "./basketSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const basketPersistConfig = {
    key: "basket",
    storage: storage,
    whitelist: ["basketState"],
};

const rootReducer = combineReducers({
    basket: persistReducer(basketPersistConfig, basketReducer),
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;