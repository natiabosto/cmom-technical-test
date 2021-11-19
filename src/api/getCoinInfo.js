import axios from "axios";

const getCoinInfo = async ({ id }) => {
  const coinInfo = await axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => response)
    .catch((e) => console.log("Error getting coin info"));

  return coinInfo;
};

export default getCoinInfo;
