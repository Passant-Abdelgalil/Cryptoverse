import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = "https://bing-news-search1.p.rapidapi.com";


export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      queryFn: async (arg) => {
        const { newsCategory, count } = arg;
        const res = await fetch(
          `/api/get-crypto-news?newsCategory=${newsCategory}&count=${count}`
        );
        const response = await res.json();
        if (response.error) return { error: response.error };
        return { data: response };
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
