import { Advice } from "@/models/advisor";

import { cloudFunctionApiSlice } from "../apiSlice";

export const { usePredictMutation } = cloudFunctionApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        predict: builder.mutation<Advice, { lat: number; long: number; crop: string }>({
            query: ({ lat, long, crop }) => ({
                url: "/predict",
                method: "POST",
                body: { lat, long, crop },
            }),
            invalidatesTags: ["predict"],
        }),
    }),
});
