import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CoinPage, HomePage } from "./modules";

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <div className={classes.header}>
          <h1>Coin Market</h1>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="coin/:id" element={<CoinPage />} />
          </Routes>
        </div>
        <div className={classes.footer}>
          <h4>Contact</h4>
        </div>
      </div>
    </Router>
  );
}

export default App;

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    padding: 25,
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

    "& h1": {
      padding: 15,
      margin: 0,
    },
  },
  footer: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    backgroundColor: "whitesmoke",
    color: "gray",
  },
}));
