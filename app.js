const rates = [
  242,
  1,
  0.00005301131,
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
  1- PKR
  2- USDT
  3- BTC
  4- Wise USD
  5- Wise GBP
  6- Wise EUR
  7- Skrill USD
  8- USDT TRC20
  9- USDT ERC20
  10- ETH ERC20 
  11- Payoneer USD
  12- Payoneer GBP
  13- Payoneer EUR
  14- Perfect Money USD
*/
const precision1 = 2;
const precision2 = 6;
const precision3 = 10;

const currenciesA = [
  "USDT",
  "BTC",
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
const currenciesB = [
  "PKR",
  "USDT",
  "BTC",
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
const currencyAOpt = document.getElementById("currencyAOpt");
const currencyBOpt = document.getElementById("currencyBOpt");
// Adding options
currenciesA.forEach((curr) => {
  currencyAOpt.innerHTML += `<option value="${curr}">${curr}</option>`
});
currenciesB.forEach((curr) => {
  currencyBOpt.innerHTML += `<option value="${curr}">${curr}</option>`
});


let currAVal = currencyAOpt.value;
let currBVal = currencyBOpt.value;

let excRate = rates[currenciesB.indexOf(currBVal)] / rates[currenciesA.indexOf(currAVal) + 1];

const receiveDiv = document.getElementById("receiveDiv");
if(excRate < 0.000001) {
  receiveDiv.innerText = excRate.toFixed(precision3);
} else if(excRate < 0.01) {
  receiveDiv.innerText = excRate.toFixed(precision2);
} else {
  receiveDiv.innerText = excRate.toFixed(precision1);
}

const userInputA = document.getElementById("userInputA");
const userInputB = document.getElementById("userInputB");
    
    
function optionChange() {
  currAVal = currencyAOpt.value;
  currBVal = currencyBOpt.value;
  excRate = rates[currenciesB.indexOf(currBVal)] / rates[currenciesA.indexOf(currAVal) + 1];
  userInputA.value = null;
  userInputB.value = null;
  
  if(excRate < 0.000001) {
    receiveDiv.innerText = excRate.toFixed(precision3);
  } else if(excRate < 0.01) {
    receiveDiv.innerText = excRate.toFixed(precision2);
  } else {
    receiveDiv.innerText = excRate.toFixed(precision1);
  }
}
    
userInputA.addEventListener("input", ()=> {
  if (excRate < 0.000001) {
    userInputB.value = ((userInputA.value) * excRate).toFixed(precision3);
  } else if(excRate < 0.01) {
    userInputB.value = ((userInputA.value) * excRate).toFixed(precision2);
  } else {
    userInputB.value = ((userInputA.value) * excRate).toFixed(precision1);
  }
});
userInputB.addEventListener("input", ()=> {
  if ((1/excRate) < 0.000001) {
    userInputA.value = ((userInputB.value) / excRate).toFixed(precision3);
  } else if((1/excRate) < 0.01) {
    userInputA.value = ((userInputB.value) / excRate).toFixed(precision2);
  } else {
    userInputA.value = ((userInputB.value) / excRate).toFixed(precision1);
  }
});