import { combineReducers, configureStore } from "@reduxjs/toolkit"
import walletReducer from "./wallet/reducer"
import themeReducer from "./walletTheme/reducer"

const reducers = combineReducers({
    wallet: walletReducer,
    theme: themeReducer,
})

export default configureStore({
    reducer: reducers,
})