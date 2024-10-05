import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "@/api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

export type ApplicationState = ReturnType<typeof store.getState>;
