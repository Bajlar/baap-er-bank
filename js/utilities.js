function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

// deposit
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");

  if (isNaN(newDepositAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const previousDepositTotal = getElementValueById("deposit-total");
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", currentDepositTotal);

  const previousBalanceAmount = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceAmount + newDepositAmount; 
  setTextElementValueById("balance-total", newBalanceTotal);
});

// withdraw
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const previousBalanceAmount = getElementValueById("balance-total");

  if (newWithdrawAmount > previousBalanceAmount) {
    alert("Bank e eto taka nai.!");
    return;
  }

  const previousWithdrawTotal = getElementValueById("withdraw-total");
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", currentWithdrawTotal);

  const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});