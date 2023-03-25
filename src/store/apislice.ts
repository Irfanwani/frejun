import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.punkapi.com/v2/beers",
  }),
  endpoints: (builder) => ({
    getbeers: builder.query({
      query: ({ page, per_page }) => `?page=${page}&per_page=${per_page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge(currentCacheData, responseData, otherArgs) {
        if (!otherArgs.arg.append) {
          return responseData;
        }
        currentCacheData.push(...responseData);
      },
    }),
  }),
});

export const { useGetbeersQuery } = apiSlice;

export default apiSlice;
