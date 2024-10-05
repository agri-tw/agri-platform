import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { env } from "@/constants/environment";

export const firebaseApiSlice = createApi({
    reducerPath: "api-slice/firebase",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["user"],
    endpoints: () => ({}),
});

export const cloudFunctionApiSlice = createApi({
    reducerPath: "api-slice/cloud-function",
    baseQuery: fetchBaseQuery({
        baseUrl: env.WEBSERVER_URL,
    }),
    tagTypes: ["predict"],
    endpoints: () => ({}),
});
