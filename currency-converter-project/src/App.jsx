import CurrencyConverter from "./CurrencyConverter";
import "./App.css";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, error } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const rate = currencyInfo[to];
    if (rate) {
      setConvertedAmount(amount * rate);
    } else {
      alert("Conversion rate not available!");
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {Object.keys(currencyInfo).length === 0 && !error && <p>Loading...</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div>
          <CurrencyConverter
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />
        </div>
        <div>
          <button type="button" onClick={swap}>
            Swap
          </button>
        </div>
        <div>
          <CurrencyConverter
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
          />
        </div>
        <button type="submit">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;