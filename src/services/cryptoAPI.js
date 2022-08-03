import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

const handleResponse = async (res) => {
  const response = await res.json();

  if (response.error) return { error: response.error };
  return { data: response.data };
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      queryFn: async (arg) => {
        const res = await fetch(`/api/get-cryptos?limit=${arg}`);
        return await handleResponse(res);
      },
    }),
    getCryptoDetails: builder.query({
      queryFn: async (arg) => {
        const res = await fetch(`/api/get-crypto-detail?coinId=${arg}`);

        return await handleResponse(res);
      },
    }),
    getCryptoHistory: builder.query({
      queryFn: async (arg) => {
        const { coinId, timePeriod } = arg;
        const res = await fetch(
          `/api/get-crypto-history?coinId=${coinId}&timePeriod=${timePeriod}`
        );

        return await handleResponse(res);
      },
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
