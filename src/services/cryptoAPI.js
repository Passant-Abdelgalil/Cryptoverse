import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const crpytoApiHeaders = {
  "X-RapidAPI-Key": "11995b252dmshc1a5127a3ef792cp115650jsn1b43dd895e69",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: crpytoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
