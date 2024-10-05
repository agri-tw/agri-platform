import { signInWithEmailAndPassword } from "firebase/auth";

import { firebaseAuth } from "@/utils/firebase";

import { apiSlice } from "../apiSlice";

export type LoginWithEmailAndPasswordPayload = {
    email: string;
    password: string;
};

export const { useLoginWithEmailAndPasswordMutation } = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginWithEmailAndPassword: builder.mutation<string, LoginWithEmailAndPasswordPayload>({
            queryFn: async (arg) => {
                await signInWithEmailAndPassword(firebaseAuth, arg.email, arg.password);

                return { data: "ok" };
            },
            invalidatesTags: ["user"],
        }),
    }),
});
