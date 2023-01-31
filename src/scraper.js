const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeData(url) {
  const results = [];
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Scrape the data you need, for example:
    $(".board-game").each((i, element) => {
      const title = $(element).find(".productCard__title").text();
      const price = $(element).find(".productCard_price").text();
      results.push({ title, price });
    });

    // Add rate limiting to reduce the strain on the website's servers
    await new Promise(resolve => setTimeout(resolve, 1000));

    return results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = scrapeData;