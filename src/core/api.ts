import axios from "axios";

export const api = axios.create({
  baseURL: "https://min-api.cryptocompare.com/data/v2",
  headers: {
    Authorization: `Apikey ${import.meta.env.VITE_CRYPTO_COMPARE_API_KEY}`,
  },
});
