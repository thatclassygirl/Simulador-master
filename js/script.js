function computeLoan() {
  const amount = document.querySelector("#amount").value;
  const interest_rate = document.querySelector("#interest_rate").value;
  const months = document.querySelector("#months").value;

  const interest = (amount * (interest_rate * 0.01)) / months;

  let payment = (amount / months + interest).toFixed(2);
  let total = (payment * months).toFixed(2);
  let interest_total = (total - amount).toFixed(2);

  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  interest_total = interest_total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.querySelector(
    "#monthlyPayment"
  ).innerHTML = `Monthly Payment = $ ${payment}`;
  document.querySelector(
    "#totalPayment"
  ).innerHTML = `Total Payment = $ ${total}`;
  document.querySelector(
    "#totalInterest"
  ).innerHTML = `Total Interest = $ ${interest_total}`;
}

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("item");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  liMaker(item);
});

button.addEventListener("click", function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});
