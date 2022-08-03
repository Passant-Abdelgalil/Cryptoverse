const axios = require("axios");

const headers = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

exports.handler = async (event) => {

  const newsCategory = event.queryStringParameters.newsCategory;
  const count = event.queryStringParameters.count;
  const api = process.env.NEWS_API;
  const url = `${api}/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`;
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
