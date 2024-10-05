import { User } from "@/models/user";
import { toSerializable } from "@/utils/common";
import { loadCurrentUser } from "@/utils/firebase";

import { firebaseApiSlice } from "../apiSlice";

export const { useGetUserQuery } = firebaseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<User | null, void>({
            queryFn: async () => {
                const currentFirebaseUser = await loadCurrentUser();
                const currentUser = toSerializable<User>(currentFirebaseUser);

                return { data: currentUser };
            },
            providesTags: ["user"],
        }),
    }),
});
