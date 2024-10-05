import { signOut } from "firebase/auth";

import { firebaseAuth } from "@/utils/firebase";

import { firebaseApiSlice } from "../apiSlice";

export const { useLogoutMutation } = firebaseApiSlice.injectEndpoints({
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
