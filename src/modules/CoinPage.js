import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getCoinInfo } from "../api";

const CoinPage = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState([]);
  const classes = useStyles();
  console.log("coinInfo", coinInfo);

  useEffect(() => {
    async function fetchCoinInfo() {
      const { data } = await getCoinInfo({ id: id });
      setCoinInfo(data);
    }
    fetchCoinInfo();
  }, [id]);

  return (
    <div className={classes.coinInfoRoot}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4 className={classes.backButton}> ← Previous Page</h4>
      </Link>
      <div className={classes.coinInfoContainer}>
        <div className={classes.nameInfoContainer}>
          <div>
            <div className={classes.name}>{coinInfo.name}</div>
            <div>
              <div className={classes.symbol}>{coinInfo.symbol}</div>
              <div className={classes.hash}>{coinInfo.hashing_algorithm}</div>
            </div>
          </div>
          <div className={classes.marketcapInfoContainer}>
            <div className={classes.marketCap}>
              Market cap: ${coinInfo.market_data?.market_cap.eur}
            </div>
            <div>
              {coinInfo.name} homepage:{" "}
              <a
                href={coinInfo.links?.homepage}
                rel="noreferrer"
                target="_blank"
              >
                {coinInfo.links?.homepage}
              </a>
            </div>
            <div className={classes.genesisDate}>
              Genesis date: {coinInfo.genesis_date}
            </div>
          </div>
        </div>
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: coinInfo.description?.en }}
        ></div>
      </div>
    </div>
  );
};

export default CoinPage;

const useStyles = makeStyles(() => ({
  coinInfoRoot: {},
  backButton: {
    margin: 0,
    padding: "10px 40px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  coinInfoContainer: {
    padding: 40,
  },
  nameInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 50,
    fontWeight: 700,
  },
  symbol: {
    fontWeight: 700,
    color: "gray",
    marginLeft: 5,
  },
  hash: {
    color: "#0d97c4",
    fontSize: 16,
    marginLeft: 5,
  },
  description: {
    marginTop: 15,
    marginBottom: 25,
    padding: 15,
    color: "#3c3c3c",
    backgroundColor: "#eff2f5",
    borderRadius: 3,
    fontSize: 14,
  },
  marketcapInfoContainer: {
    justifyContent: "end",
    display: "flex",
    gap: 4,
    flexDirection: "column",
    textAlign: "right",
  },
  marketCap: {
    fontWeight: 700,
    color: "#16c784",
  },
  genesisDate: {
    color: "gray",
  },
}));
