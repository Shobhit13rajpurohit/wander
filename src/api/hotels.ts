import { getAccessToken } from "./auth";
import { getCityCodeFromName } from "./cityApi"; 

export const getHotelsByCityName = async (cityName: string) => {
  const cityCode = await getCityCodeFromName(cityName);
  if (!cityCode) {
    console.error("City code not found!");
    return [];
  }

  const token = await getAccessToken();
  const response = await fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    console.error("Error fetching hotels:", response.statusText);
    return [];
  }

  const data = await response.json();
  return data.data || [];
};
