let form = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let eurElement = document.querySelector(".js-eur");
let usdElement = document.querySelector(".js-usd");
let gbpElement = document.querySelector(".js-gbp");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let plnValue = plnElement.value;
    let eurValue = plnValue / 4.56;
    let usdValue = plnValue / 3.77;
    let gbpValue = plnValue / 5.23;

    eurElement.innerText = eurValue.toFixed(2) + " EUR";
    usdElement.innerText = usdValue.toFixed(2) + " USD";
    gbpElement.innerText = gbpValue.toFixed(2) + " GBP";

});

form.addEventListener("reset", () => {

    eurElement.innerText = "0 EUR";
    usdElement.innerText = "0 USD";
    gbpElement.innerText = "0 GBP";
})