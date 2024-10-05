import { loadCurrentUser } from "@/utils/firebase";

import { apiSlice } from "../apiSlice";

export const { useIsLoggedInQuery } = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        isLoggedIn: builder.query<boolean, void>({
            queryFn: async () => {
                const currentUser = await loadCurrentUser();

                return { data: !!currentUser };
            },
            providesTags: ["user"],
        }),
    }),
});
