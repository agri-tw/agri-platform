import { signOut } from "firebase/auth";

import { firebaseAuth } from "@/utils/firebase";

import { apiSlice } from "../apiSlice";

export const { useLogoutMutation } = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        logout: builder.mutation<string, void>({
            queryFn: async () => {
                await signOut(firebaseAuth);

                return { data: "ok" };
            },
            invalidatesTags: ["user"],
        }),
    }),
});
