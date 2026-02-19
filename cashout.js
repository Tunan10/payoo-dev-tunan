document.getElementById('cashout-btn').addEventListener('click', function () {
  //1: get the agent number & validate
  const cashNumberInput = document.getElementById('cashout-number');
  const cashoutNumber = cashNumberInput.value;

  if (cashoutNumber.length != 11) {
    alert('Invalid Agent Number');
    return;
  }

  //2: Get the amount, validate, convert to number
  const cashoutAmount = document.getElementById('cashout-amount');
  const cashoutAmountNumber = cashoutAmount.value;
  console.log(cashoutAmountNumber);

  //3: Get the current balace, validate , convert to number
  const balaceElement = document.getElementById('balace');
  const balance = balaceElement.innerText;
  console.log(balance);

  //4: calculate new balace
  const newBalance = Number(balance) - Number(cashoutAmountNumber);
  console.log(newBalance);
  if (newBalance < 0) {
    alert('Invalid Amount');
    return;
  }
  //5: get the pin and verify
  const cashoutPinInput = document.getElementById('cashout-pin');
  const pin = cashoutPinInput.value;
  if (pin == '2510') {
    alert('Cashout successfull');
  } else {
    alert('Invalid pin');
    return;
  }
  balaceElement.innerText = newBalance;

  //5-1 true: show alert > set balance
  //5-2 false: anerron alert > return
});
