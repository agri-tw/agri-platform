import { loadCurrentUser } from "@/utils/firebase";

import { firebaseApiSlice } from "../apiSlice";

export const { useIsLoggedInQuery } = firebaseApiSlice.injectEndpoints({
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
