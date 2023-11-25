function convertToUSD() {
    const cadAmountValue = document.getElementById("cadAmount").value.trim();
    const resultElement = document.getElementById("conversion-result");
  
    resultElement.textContent = ``;
  
    if (!isValidInput(cadAmountValue)) {
      displayErrorMessage(
        resultElement,
        "Please enter a valid number for Canadian Dollars."
      );
      return;
    }
  
    const exchangeRateCADtoUSD = 0.75;
    const usdAmount = calculateConvertedAmount(
      cadAmountValue,
      exchangeRateCADtoUSD
    );
    displayConvertedValue("usdAmount", usdAmount);
  }
  
  function convertToCAD() {
    const usdAmountValue = document.getElementById("usdAmount").value.trim();
    const resultElement = document.getElementById("conversion-result");
  
    resultElement.textContent = ``;
  
    if (!isValidInput(usdAmountValue)) {
      displayErrorMessage(
        resultElement,
        "Please enter a valid number for US Dollars."
      );
      return;
    }
  
    const exchangeRateUSDtoCAD = 1.33;
    const cadAmount = calculateConvertedAmount(
      usdAmountValue,
      exchangeRateUSDtoCAD
    );
    displayConvertedValue("cadAmount", cadAmount);
  }

  const exchangeRateUSDtoCAD = 1.33;
  const cadAmount = calculateConvertedAmount(
    usdInputValue,
    exchangeRateUSDtoCAD
  );
  displayConvertedValue("cadInput", cadAmount);

function isValidInput(input) {
  return !isNaN(input) && input !== "";
}

function calculateConvertedAmount(inputValue, exchangeRate) {
  return parseFloat(inputValue) * exchangeRate;
}

function displayConvertedValue(elementId, amount) {
  document.getElementById(elementId).value = amount.toFixed(3);
}

function displayErrorMessage(element, message) {
  element.textContent = message;
}

