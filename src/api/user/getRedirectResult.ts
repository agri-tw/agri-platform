import { getRedirectResult } from "firebase/auth";

import { firebaseAuth } from "@/utils/firebase";

import { firebaseApiSlice } from "../apiSlice";

export const { useLazyGetRedirectResultQuery } = firebaseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRedirectResult: builder.query<string, void>({
            queryFn: async () => {
                await getRedirectResult(firebaseAuth);

                return { data: "ok" };
            },
            // Only call when page is loaded, no need to refetch
            providesTags: [],
        }),
    }),
});
