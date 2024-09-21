// get element by id
function getEleID(id) {
  return document.getElementById(id);
}

// get input form value
function getValue(id) {
  return document.getElementById(id).value;
}

// get innet text
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

// show choosen item
function showButton(id) {
  getEleID("input-form").classList.add("hidden");
  getEleID("transaction-history").classList.add("hidden");

  getEleID(id).classList.remove("hidden");
}
