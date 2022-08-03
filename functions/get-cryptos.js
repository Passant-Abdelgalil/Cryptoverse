const axios = require("axios");

exports.handler = async function (event) {
  const limit = event.queryStringParameters.limit;

  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  };
  let response;
  const api = process.env.COIN_RANKING_API;
  try {
    response = await axios.get(`${api}/coins?limit=${limit}`, {
      headers,
    });
  } catch (err) {

    return {
      statusCode: err.response?.status || 500,
      body: JSON.stringify({ error: {...err.response?.data, status: err.response?.status} }),
    };
  }

  return { statusCode: 200, body: JSON.stringify(response.data) };
};
