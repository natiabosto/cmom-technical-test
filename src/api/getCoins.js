import axios from "axios";

const getCoins = async () => {
  const params = { vs_currency: "EUR", per_page: 10 };

  const coins = await axios
    .get("https://api.coingecko.com/api/v3/coins/markets", { params })
    .then((response) => response)
    .catch((e) => console.log("Error getting coins"));

  return coins;
};

export default getCoins;
