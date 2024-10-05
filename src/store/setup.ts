import { configureStore } from "@reduxjs/toolkit";

import { cloudFunctionApiSlice, firebaseApiSlice } from "@/api/apiSlice";

export const store = configureStore({
    reducer: {
        [cloudFunctionApiSlice.reducerPath]: cloudFunctionApiSlice.reducer,
        [firebaseApiSlice.reducerPath]: firebaseApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(cloudFunctionApiSlice.middleware).concat(firebaseApiSlice.middleware);
    },
});

export type ApplicationState = ReturnType<typeof store.getState>;
