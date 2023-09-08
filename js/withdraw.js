document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceAmountString = balanceTotalElement.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceAmountString);

  if (newWithdrawAmount > previousBalanceAmount) {
    alert("Bank e eto taka nai.!");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
