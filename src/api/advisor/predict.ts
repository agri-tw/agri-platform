import { Advice } from "@/models/advisor";

import { cloudFunctionApiSlice } from "../apiSlice";

export const { usePredictMutation } = cloudFunctionApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        predict: builder.mutation<Advice, { lat: number; long: number; crop: string; language: string }>({
            query: ({ lat, long, crop, language }) => ({
                url: "/predict",
                method: "POST",
                body: { lat, long, crop, language },
            }),
            invalidatesTags: ["predict"],
        }),
    }),
});
