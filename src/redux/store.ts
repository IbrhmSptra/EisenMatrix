import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./slice/modalSlice";
import activitiesReducer from "./slice/activitiesSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface rootState {
  modal: ReturnType<typeof modalReducer>;
  activities: ReturnType<typeof activitiesReducer>;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["activities"],
};

const rootReducer = combineReducers({
  modal: modalReducer,
  activities: activitiesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
