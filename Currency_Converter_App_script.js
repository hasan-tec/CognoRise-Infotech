const dropList = document.querySelectorAll("form select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  getButton = document.querySelector("form button");

const exchangeRate = 220.56; // fixed exchange rate between USD and PKR
const flagURL = "https://flagcdn.com/w320/pk.png"; // URL for Pakistani flag

for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "PKR" ? "selected" : "";
    let currencyName = currency_code.toUpperCase();
    let optionTag = `<option value="${currency_code}" ${selected}>${currencyName} (${country_list[currency_code]})</option>`;
    if (currency_code == "PKR") {
      let flagTag = `<img src="${flagURL}" alt="${currencyName} flag" class="flag">`;
      optionTag = flagTag + optionTag;
    }
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
}

getButton.addEventListener("click", e => {
  e.preventDefault();
  convertCurrency();
});

function convertCurrency() {
  const amount = document.querySelector("form input");
  const exchangeRateTxt = document.querySelector("form .exchange-rate");
  let amountVal = amount.value;
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  let result = (amountVal * exchangeRate).toFixed(2);
  exchangeRateTxt.innerText = `${amountVal} USD = ${result} PKR`;
}
if (currency_code == "PKR") {
    let flagTag = `<img src="${flagURL}" alt="${currencyName} flag" class="flag">`;
    optionTag = flagTag + optionTag;
  }
  dropList[i].insertAdjacentHTML("beforeend", optionTag);