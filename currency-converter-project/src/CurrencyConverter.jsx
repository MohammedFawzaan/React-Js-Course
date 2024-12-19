/* eslint-disable react/prop-types */
import { useId } from "react";
// import PropTypes from "prop-types";

function CurrencyConverter({
    label, 
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [''],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
  const inputId = useId(); // Unique ID for the input
  const selectId = useId(); // Unique ID for the select

  return (
    <div className={`${className}`}> 
        <div>
            <label htmlFor={inputId}> {label} </label>
            <input 
                type="number"
                id={inputId} 
                className="" 
                placeholder="Amount" 
                disabled={amountDisabled} 
                value={amount} 
                onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}} />
        </div>
        <div>
            <label htmlFor={selectId}>Currency</label>
            <select 
                id={selectId}
                value={selectedCurrency}
                onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
                disabled={currencyDisabled} > 
                {
                    currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))
                }
            </select>
        </div>
    </div>
  );
}

// // Adding prop type validation
// CurrencyConverter.propTypes = {
//     label: PropTypes.string.isRequired, // Must be a string and required
//     amount: PropTypes.number.isRequired, // Must be a number and required
//     onAmountChange: PropTypes.func, // Optional function
//     onCurrencyChange: PropTypes.func, // Optional function
//     currencyOptions: PropTypes.arrayOf(PropTypes.string), // Array of strings
//     selectedCurrency: PropTypes.string, // Must be a string
//     amountDisabled: PropTypes.bool, // Boolean
//     currencyDisabled: PropTypes.bool, // Boolean
//     className: PropTypes.string, // String for custom classes
// };

export default CurrencyConverter;