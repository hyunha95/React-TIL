import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [coinPrice, setCoinPrice] = useState();
  const [showPrice, setShowPrice] = useState(false);
  const onChange = (e) => setPrice(e.target.value / coinPrice);
  const coinSelectChanges = (e) => {
    setCoinPrice(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <input onChange={onChange} type="text" />
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={coinSelectChanges}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>coinNumber : {price}</div>
    </div>
  );
}

export default App;
