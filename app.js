const rates = [
  0.00005301131,
  242,
  1,
  0.834482,
  0.960317,
  1.008333,
  1000,
  8,
  9,
  10,
  11,
  12,
  1.008333
]
/*
Rates given above are in this order
USD To: 
  1- BTC
  2- PKR
  3- Wise USD
  4- Wise GBP
  5- Wise EUR
  6- Skrill USD
  7- USDT TRC20
  8- USDT ERC20
  9- ETH ERC20
  10- Payoneer USD
  11- Payoneer GBP
  12- Payoneer EUR
  13- Perfect Money USD
*/
const precision1 = 2;
const precision2 = 6;
const precision3 = 10;

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
  "./img/PKR.png",
  "./img/Wise_USD.png",
  "./img/Wise_GBP.png",
  "./img/Wise_EUR.png",
  "./img/Skrill_USD.png",
  "./img/Extra.png",
  "./img/Extra.png",
  "./img/Extra.png",
  "./img/Payoneer.png",
  "./img/Payoneer.png",
  "./img/Payoneer.png",
  "./img/Extra.png"
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
  "./img/PKR.png",
  "./img/Wise_USD.png",
  "./img/Wise_GBP.png",
  "./img/Wise_EUR.png",
  "./img/Skrill_USD.png",
  "./img/Extra.png",
  "./img/Extra.png",
  "./img/Extra.png",
  "./img/Payoneer.png",
  "./img/Payoneer.png",
  "./img/Payoneer.png",
  "./img/Extra.png"
];

let currA = document.getElementById("currA").innerText;
let currB = document.getElementById("currB").innerText;
let excRate = rates[currenciesB.indexOf(currB)] / rates[currenciesA.indexOf(currA)];
let receiveDiv = document.getElementById("receiveDiv");
if(excRate < 0.000001) {
  receiveDiv.innerText = excRate.toFixed(precision3);
} else {
  receiveDiv.innerText = excRate<0.01? (excRate.toFixed(precision2)) : (excRate.toFixed(precision1));
}


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
    if(excRate < 0.000001) {
      receiveDiv.innerText = excRate.toFixed(precision3);
    } else {
      receiveDiv.innerText = excRate<0.01? (excRate.toFixed(precision2)) : (excRate.toFixed(precision1));
    }
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
    if(excRate < 0.000001) {
      receiveDiv.innerText = excRate.toFixed(precision3);
    } else {
      receiveDiv.innerText = excRate<0.01? (excRate.toFixed(precision2)) : (excRate.toFixed(precision1));
    }
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
  if(excRate < 0.000001) {
    receiveDiv.innerText = excRate.toFixed(precision3);
  } else {
    receiveDiv.innerText = excRate<0.01? (excRate.toFixed(precision2)) : (excRate.toFixed(precision1));
  }
  
  let temp = btnDisplayA.innerHTML;
  btnDisplayA.innerHTML = btnDisplayB.innerHTML;
  btnDisplayB.innerHTML = temp;

  temp = userInput.value;
  userInput.value = output.value;
  output.value = temp;
}


userInput.addEventListener("input", ()=> {
  if(excRate < 0.000001) {
    output.value = ((userInput.value) * excRate).toFixed(precision3);
  } else {
    output.value = ((userInput.value) * excRate) < 0.01? ((userInput.value) * excRate).toFixed(precision2) : ((userInput.value) * excRate).toFixed(precision1);
  }
});