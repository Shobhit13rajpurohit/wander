import { getAccessToken } from "./auth";

export const getCityCodeFromName = async (cityName: string) => {
  const token = await getAccessToken();
  const response = await fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${cityName}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data?.data?.[0]?.iataCode || null;
};
