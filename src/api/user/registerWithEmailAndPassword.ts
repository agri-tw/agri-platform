import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { firebaseAuth } from "@/utils/firebase";

import { apiSlice } from "../apiSlice";

export type RegisterWithEmailAndPasswordPayload = {
    email: string;
    password: string;
    displayName: string;
    photoURL: string;
};

export const { useRegisterWithEmailAndPasswordMutation } = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerWithEmailAndPassword: builder.mutation<string, RegisterWithEmailAndPasswordPayload>({
            queryFn: async (arg) => {
                const userCredential = await createUserWithEmailAndPassword(firebaseAuth, arg.email, arg.password);

                await updateProfile(userCredential.user, {
                    displayName: arg.displayName,
                    photoURL: arg.photoURL || undefined,
                });

                return { data: "ok" };
            },
            invalidatesTags: ["user"],
        }),
    }),
});
