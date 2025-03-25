import { getAccessToken } from "./auth";

export const getHotelsByCity = async (cityCode: string) => {
  const token = await getAccessToken();
  const response = await fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};