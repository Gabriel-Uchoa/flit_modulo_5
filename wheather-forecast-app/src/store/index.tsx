import { combineReducers, configureStore } from "@reduxjs/toolkit"
import climateReducer from "./climate/reducer"

const reducers = combineReducers({
    climate: climateReducer,
})

export default configureStore({
    reducer: reducers,
})