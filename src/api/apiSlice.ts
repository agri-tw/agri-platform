import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const firebaseApiSlice = createApi({
    reducerPath: "api-slice/firebase",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["user"],
    endpoints: () => ({}),
});

export const cloudFunctionApiSlice = createApi({
    reducerPath: "api-slice/cloud-function",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://agri-server-vvqtt2yjkq-uc.a.run.app",
    }),
    tagTypes: ["predict"],
    endpoints: () => ({}),
});
