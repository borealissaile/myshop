import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Tipos automáticos
export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
