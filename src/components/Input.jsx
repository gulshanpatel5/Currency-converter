import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Amount Input Section */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 border-b border-gray-300 focus:border-blue-500"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      {/* Currency Select Section */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label className="text-black/40 mb-2 w-full">Currency Type</label>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none border border-gray-300 focus:border-blue-500"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;