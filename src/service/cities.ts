import { City } from "../types";
import cities from "../data/cities.json";

const OPENWEATHERMAP_API_KEY = import.meta.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export const getCities = async () =>
  new Promise<City[]>((resolve) => {
    resolve(cities.cities);
  });

export const getTemperature = async (coords: City["coords"]) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${OPENWEATHERMAP_API_KEY}`
  ).then((res) => res.json());
};
