import axios from "axios";

export const api = axios.create({
  baseURL: "https://min-api.cryptocompare.com",
  headers: {
    Authorization: `Apikey ${import.meta.env.VITE_CRYPTO_COMPARE_API_KEY}`,
  },
});
