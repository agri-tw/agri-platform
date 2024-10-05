import { AuthProvider, signInWithRedirect } from "firebase/auth";

import { firebaseAuth } from "@/utils/firebase";

import { apiSlice } from "../apiSlice";

export const { useLoginWithProviderMutation } = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginWithProvider: builder.mutation<string, AuthProvider>({
            queryFn: async (arg) => {
                await signInWithRedirect(firebaseAuth, arg);

                return { data: "ok" };
            },
            invalidatesTags: ["user"],
        }),
    }),
});
