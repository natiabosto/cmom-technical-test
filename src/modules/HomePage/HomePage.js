import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCoins } from "../../api";
import CoinsListItem from "./CoinsListItem";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function fetchCoins() {
      const { data } = await getCoins();
      setCoins(data);
    }
    fetchCoins();
  }, []);

  return (
    <div className={classes.coinsRoot}>
      <div className={classes.headings}>
        <div className={classes.nameHeading}>
          <h3>Name</h3>
        </div>
        <div className={classes.priceHeadings}>
          <h3>Price</h3>
          <h3>24 hr high</h3>
          <h3>24 hr low</h3>
        </div>
      </div>
      <ul className={classes.coinsList}>
        {coins.map((coin) => (
          <Link
            key={coin.id}
            to={`coin/${coin.id}`}
            style={{ textDecoration: "none" }}
          >
            <CoinsListItem coin={coin} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

const useStyles = makeStyles(() => ({
  coinsRoot: {
    margin: "0 15px",
    borderRadius: 3,
    backgroundColor: "white",
  },
  headings: {
    display: "flex",
    justifyContent: "space-between",
  },
  nameHeading: {
    paddingLeft: 15,
  },
  priceHeadings: {
    marginRight: 10,
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    paddingRight: 10,
    "& h3": {
      minWidth: "15vw",
      justifyContent: "left",
    },
  },
  coinsList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    borderTop: "1px solid rgba(0,0,0,0.1)",
  },
}));
