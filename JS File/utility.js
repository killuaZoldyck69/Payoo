// cash out button
getEleID("cash-out-btn").addEventListener("click", function (event) {
  //   event.preventDefault();

  showButton("input-form");

  getEleID("amount-title").innerText = "Cash Out";
  getEleID("transactional-btn").innerText = "Cash Out";
});

// Add money button
getEleID("add-money-btn").addEventListener("click", function (event) {
  //   event.preventDefault();

  showButton("input-form");

  getEleID("amount-title").innerText = "Add Money";
  getEleID("transactional-btn").innerText = "Add Money";
});

// transction history
getEleID("transaction").addEventListener("click", function () {
  console.log("yo");
  showButton("transaction-history");
});

getEleID("transactional-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const amount = parseFloat(getValue("amount"));
  const pinNum = getValue("pin");
  const currentBalance = parseFloat(getInnerText("current-balance"));

  if (pinNum === "1234" && getInnerText("transactional-btn") === "Add Money") {
    const newBalance = amount + currentBalance;
    getEleID("current-balance").innerText = newBalance;
  } else if (
    pinNum === "1234" &&
    getInnerText("transactional-btn") === "Cash Out"
  ) {
    const newBalance = currentBalance - amount;
    getEleID("current-balance").innerText = newBalance;
  } else {
    alert("Transaction Failed");
  }
});
