import { useState, useEffect } from 'react';
import InputBox from './components/input'; // Fixed import statement
import useCurrencyinfo from './hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0); // Default value is 0
  const [from, SetFrom] = useState('usd'); // Default currency is USD
  const [to, SetTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [options, setOptions] = useState([]);
  const currencyInfo = useCurrencyinfo(from);

  // Debugging: Log currencyInfo and options
  useEffect(() => {
    console.log('currencyInfo:', currencyInfo); // Log fetched currency info
    if (currencyInfo) {
      const keys = Object.keys(currencyInfo);
      console.log('Available options:', keys); // Log available options
      setOptions(keys);
    }
  }, [currencyInfo]);

  const swap = () => {
    SetFrom(to);
    SetTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => SetFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => SetTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
