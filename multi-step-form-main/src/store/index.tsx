import { combineReducers, configureStore } from "@reduxjs/toolkit"
import multiStepFormReducer from "./MultiStepForm/reducer"

const reducers = combineReducers({
    multiStep: multiStepFormReducer,
})

export default configureStore({
    reducer: reducers,
})