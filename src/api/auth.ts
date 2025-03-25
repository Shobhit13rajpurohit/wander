export const getAccessToken = async () => {
  const response = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "XHWZAnuRMRMDUsNbkyho4N4DrJbLtV5m",
      client_secret: "ZqhNAE3eAPEAZIbz",
    }),
  });

  const data = await response.json();
  return data.access_token;
};