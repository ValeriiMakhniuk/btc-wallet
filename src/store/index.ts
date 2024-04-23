import { configureStore } from "@reduxjs/toolkit";
import { accountApi } from "@/api";
import { accountSlice } from "./slices/account";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [accountApi.reducerPath]: accountApi.reducer,
      [accountSlice.reducerPath]: accountSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(accountApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
