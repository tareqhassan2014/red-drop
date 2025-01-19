import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "YOUR_API_BASE_URL",
        prepareHeaders: (headers) => {
            // Add any default headers here
            return headers;
        },
    }),
    endpoints: () => ({}),
});
