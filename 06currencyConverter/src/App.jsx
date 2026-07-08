import { useState } from "react";
import InputBox from "./inputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(currency);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-md bg-white rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-5">
          Currency Converter
        </h1>

        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setCurrency}
          currencyOptions={Object.keys(currencyInfo)}
          selectCurrency={currency}
        />

        <div className="my-4" />

        <InputBox
          label="To"
          amount={0}
          currencyOptions={Object.keys(currencyInfo)}
          selectCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
          amountDisable
        />
      </div>
    </div>
  );
}

export default App;