import { makeStyles } from "@mui/styles";
import React from "react";

const CoinsListItem = ({ coin }) => {
  const classes = useStyles();
  return (
    <div className={classes.coinLine}>
      <div className={classes.iconName}>
        <img src={coin.image} alt="coin" />
        <h3>{coin.name}</h3>
        <h4>{coin.symbol}</h4>
      </div>
      <div className={classes.prices}>
        <h3 className={`${classes.price} ${classes.black}`}>
          ${coin.current_price}
        </h3>
        <h3 className={`${classes.price} ${classes.green}`}>
          ▲{coin.high_24h}
        </h3>
        <h3 className={`${classes.price} ${classes.red}`}>▼{coin.low_24h}</h3>
      </div>
    </div>
  );
};

export default CoinsListItem;

const useStyles = makeStyles(() => ({
  coinLine: {
    padding: 10,
    borderBottom: "1px solid #eff2f5",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "&:hover": {
      backgroundColor: "#f8fafd",
    },
  },
  iconName: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 10,
    "& img": {
      width: 40,
      height: 40,
    },
    "& h3": {
      color: "#000",
    },
    "& h4": {
      color: "#828c9e",
    },
  },
  prices: {
    display: "flex",
    paddingRight: 10,
    justifyContent: "right",
    alignItems: "center",
    gap: 10,
  },
  price: {
    minWidth: "15vw",
  },
  black: {
    color: "#000",
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
}));
