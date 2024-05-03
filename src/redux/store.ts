import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./slice/modal";

export interface rootState {
  modal: ReturnType<typeof modalReducer>;
}

const rootReducer = combineReducers({
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
