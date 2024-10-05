import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api-slice",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["user"],
    endpoints: () => ({}),
});
