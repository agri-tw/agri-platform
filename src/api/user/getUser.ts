import { User } from "firebase/auth";

import { loadCurrentUser } from "@/utils/firebase";

import { apiSlice } from "../apiSlice";

export const { useGetUserQuery } = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<User | null, void>({
            queryFn: async () => {
                const currentUser = await loadCurrentUser();

                return { data: currentUser };
            },
            providesTags: ["user"],
        }),
    }),
});
