import { City, WeatherResponse } from "../types";

const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

export const getWeather = async ({ lat, lng }: City["coords"]) => {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?q=${lat},${lng}&key=${API_KEY}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch weather data");
    }
  }) as Promise<WeatherResponse>;
};
