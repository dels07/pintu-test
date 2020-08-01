/**
 * ---------------------
 * Pintu.co.id test # 1
 * ---------------------
 * What is the maximum profit for Jacky can get?
 * https://gist.githubusercontent.com/Jekiwijaya/c72c2de532203965bf818e5a4e5e43e3/raw/2631344d08b044a4b833caeab8a42486b87cc19a/gistfile1.txt
 */

const axios = require('axios');

async function calculatePrice() {
  const response = await axios.get('https://gist.githubusercontent.com/Jekiwijaya/c72c2de532203965bf818e5a4e5e43e3/raw/2631344d08b044a4b833caeab8a42486b87cc19a/gistfile1.txt');

  const prices = response.data.split(' ');

  let minPrice = prices[0];
  let maxPrice = 0;

  prices.forEach((price) => {
    if (minPrice > price) {
      minPrice = price;
      maxPrice = 0;
    }

    if (maxPrice < price) {
      maxPrice = price;
    }
  });

  console.log('min price:', minPrice);
  console.log('max price:', maxPrice);
  console.log('profit:', maxPrice - minPrice);
}

calculatePrice().catch(e => console.log(e));