const axios = require("axios");

exports.handler = async function (event) {
  const coinId = event.queryStringParameters.coinId;
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  };
  const api = process.env.COIN_RANKING_API;
  const url = `${api}/coin/${coinId}`;
  let response;

  try {
    response = await axios.get(url, { headers });
  } catch (err) {

    return {
      statusCode: err.response?.status || 500,
      body: JSON.stringify({
        error: { ...err.response?.data, status: err.response?.status },
      }),
    };
  }

  return { statusCode: 200, body: JSON.stringify(response.data) };
};
