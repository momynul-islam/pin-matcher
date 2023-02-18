function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  return pin;
}

function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length == 4) return pin;
  else return getPin();
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPin = document.getElementById("display-pin");
  displayPin.value = pin;
});

document.getElementById("calculator").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const typedNumbers = document.getElementById("typed-number");
  const previousTypedNumbers = typedNumbers.value;

  if (isNaN(number)) {
    if (number === "C") {
      typedNumbers.value = "";
    } else if (number === "<") {
      let chars = previousTypedNumbers.split("");
      chars.pop();
      typedNumbers.value = chars.join("");
    }
  } else {
    const newTypedNumbers = previousTypedNumbers + number;
    typedNumbers.value = newTypedNumbers;
  }
});

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPin = document.getElementById("display-pin");
  const pin = displayPin.value;

  const typedNumbers = document.getElementById("typed-number");
  const currentPin = typedNumbers.value;

  const successPinMessage = document.getElementById("pin-success");
  const failurePinMessage = document.getElementById("pin-failure");

  if (currentPin === pin) {
    successPinMessage.style.display = "block";
    failurePinMessage.style.display = "none";
  } else {
    successPinMessage.style.display = "none";
    failurePinMessage.style.display = "block";
  }
});
