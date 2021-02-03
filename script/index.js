const btn = document.querySelector("button");
let amountInput = document.getElementById("original-currency-amount");
let originalCurrencyUnit = document.getElementById("original-currency-unit")
let newCurrencyUnit = document.getElementById("new-currency-unit");
let exchangeRate = document.getElementById("exchange-rate");
let displayOutput = document.getElementById("output-text");
btn.addEventListener("click", () => {
    //
    if (amountInput.value.length > 0) {
        let amtValue = parseFloat(amountInput.value);
        originalCurrencyUnit.value = "dollar";
        newCurrencyUnit.value = 'pounds';
        //covert from dollar to pounds;

        let convertDollarToPounds = amtValue * 0.73;
        let exchangeValue = exchangeRate.value = convertDollarToPounds;

        //display output
        displayOutput.textContent = `Your ${amtValue}
     Dollar will currently buy you ${exchangeValue} Pounds`;
    }

})