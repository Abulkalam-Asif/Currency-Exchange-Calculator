const rates = [
  1, 4140577.16, 18148.20, 14924.72, 16851.87, 18148.20, 1000, 8, 9, 10, 11, 12, 13
]
/*
BTC To: BTC, PKR, USD, GBP, EUR, Skrill USD, 7, 8, 9, ...
*/
const precision1 = 2;
const precision2 = 6;

const currenciesA = [
  "BTC",
  "PKR",
  "Wise USD",
  "Wise GBP",
  "Wise EUR",
  "Skrill USD",
  "USDT TRC20",
  "USDT ERC20",
  "ETH ERC20",
  "Payoneer USD",
  "Payoneer GBP",
  "Payoneer EUR",
  "Perfect Money USD"
];
const logosA = [
  "./img/BTC.png",
  "./img/BTC.png",
  "./img/Wise_USD.png",
  "./img/Wise_GBP.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png"
];
const currenciesB = [
  "BTC",
  "PKR",
  "Wise USD",
  "Wise GBP",
  "Wise EUR",
  "Skrill USD",
  "USDT TRC20",
  "USDT ERC20",
  "ETH ERC20",
  "Payoneer USD",
  "Payoneer GBP",
  "Payoneer EUR",
  "Perfect Money USD"
];
const logosB = [
  "./img/BTC.png",
  "./img/BTC.png",
  "./img/Wise_USD.png",
  "./img/Wise_GBP.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png",
  "./img/Wise_EUR.png"
];

let currA = document.getElementById("currA").innerText;
let currB = document.getElementById("currB").innerText;
let excRate = rates[currenciesB.indexOf(currB)] / rates[currenciesA.indexOf(currA)];
let receiveDiv = document.getElementById("receiveDiv");
receiveDiv.innerText = excRate<0.01? (excRate.toFixed(precision2)) : (excRate.toFixed(precision1));


const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

const currencyAList = document.getElementById("currencyAList");
currenciesA.forEach((curr, index) => {
  currencyAList.innerHTML += 
  `<li class="dropdown-item itemsA">
  <img src="${logosA[index]}" width="30px"> 
  <span class="fw-bold">${curr}</span>
  </li>`
});
const currencyBList = document.getElementById("currencyBList");
currenciesB.forEach((curr, index) => {
  currencyBList.innerHTML += 
  `<li class="dropdown-item itemsB">
  <img src="${logosB[index]}" width="30px"> 
  <span class="fw-bold">${curr}</span>
  </li>`
});
  
const itemsA = Array.prototype.slice.call(document.getElementsByClassName("itemsA"));
const btnDisplayA = document.getElementById("btnDisplayA");

itemsA.forEach(item => {
  item.addEventListener("click", ()=> {
    let str = item.innerHTML;
    btnDisplayA.innerHTML = str.slice(1, str.indexOf(` class="fw-bold"`)) + ` id="currA"` + str.slice(str.indexOf(` class="fw-bold"`));
    currA = document.getElementById("currA").innerText;
    excRate = rates[currenciesB.indexOf(currB)] / rates[currenciesA.indexOf(currA)];
    receiveDiv.innerText = excRate<0.01? (excRate.toFixed(precision2)) : (excRate.toFixed(precision1));
    userInput.value = null;
    output.value = null;
  });
});

const itemsB = Array.prototype.slice.call(document.getElementsByClassName("itemsB"));
const btnDisplayB = document.getElementById("btnDisplayB");

itemsB.forEach(item => {
  item.addEventListener("click", ()=> {
    let str = item.innerHTML;
    btnDisplayB.innerHTML = str.slice(1, str.indexOf(` class="fw-bold"`)) + ` id="currB"` + str.slice(str.indexOf(` class="fw-bold"`));
    currB = document.getElementById("currB").innerText;
    excRate = rates[currenciesB.indexOf(currB)] / rates[currenciesA.indexOf(currA)];
    receiveDiv.innerText = excRate<0.01? (excRate.toFixed(precision2)) : (excRate.toFixed(precision1));
    userInput.value = null;
    output.value = null;
  });
});


function swapCurrencies() {
  const currAElement = document.getElementById("currA");
  const currBElement = document.getElementById("currB");
  currAElement.id = "currB";
  currBElement.id = "currA";

  currA = document.getElementById("currA").innerText;
  currB = document.getElementById("currB").innerText;
  excRate = rates[currenciesB.indexOf(currB)] / rates[currenciesA.indexOf(currA)];
  receiveDiv.innerText = excRate<0.01? (excRate.toFixed(precision2)) : (excRate.toFixed(precision1));
  
  let temp = btnDisplayA.innerHTML;
  btnDisplayA.innerHTML = btnDisplayB.innerHTML;
  btnDisplayB.innerHTML = temp;

  temp = userInput.value;
  userInput.value = output.value;
  output.value = temp;
}


userInput.addEventListener("input", ()=> {
  output.value = ((userInput.value) * excRate) < 0.01? ((userInput.value) * excRate).toFixed(precision2) : ((userInput.value) * excRate).toFixed(precision1);
});