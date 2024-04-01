import { City } from "../types";

export function getDistance(
  coords1: City["coords"],
  coords2: City["coords"]
): number {
  const R: number = 6371; // Earth's radius in kilometers
  const dLat = (coords2.lat - coords1.lat) * (Math.PI / 180);
  const dLon = (coords2.lng - coords1.lng) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coords1.lat * (Math.PI / 180)) *
      Math.cos(coords2.lat * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

export const isMatch = (
  search: string,
  city: Pick<City, "active" | "country" | "name">
) => {
  const reg = new RegExp(search, "i");
  return (reg.test(city.name) || reg.test(city.country)) && city.active;
};
