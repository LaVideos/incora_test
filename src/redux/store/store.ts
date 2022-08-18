import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {showReducer} from "../slice";


const comb = combineReducers({
    show:showReducer
});

const setupStore = () => configureStore({
    reducer:comb,
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

type RootState = ReturnType<typeof showReducer>
type setup = ReturnType<typeof setupStore>
type AppDispatch = setup['dispatch']

export type {
    RootState,
    setup,
    AppDispatch
}

export {
    setupStore
}