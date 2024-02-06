import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from "./slices/apiSlice.js";
import cartSliceReducer from "./slices/cartSlice.js";
// import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
