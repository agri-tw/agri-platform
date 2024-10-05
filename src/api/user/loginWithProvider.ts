import { AuthProvider, signInWithRedirect } from "firebase/auth";

import { firebaseAuth } from "@/utils/firebase";

import { firebaseApiSlice } from "../apiSlice";

export const { useLoginWithProviderMutation } = firebaseApiSlice.injectEndpoints({
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
