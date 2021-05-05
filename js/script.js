{


    const eurElement = document.querySelector(".js-eur");
    const usdElement = document.querySelector(".js-usd");
    const gbpElement = document.querySelector(".js-gbp");
    

    const showResult = (eurValue, usdValue, gbpValue ) => {
        eurElement.innerText = eurValue.toFixed(2) + " EUR";
        usdElement.innerText = usdValue.toFixed(2) + " USD";
        gbpElement.innerText = gbpValue.toFixed(2) + " GBP";
       
    }

    const submit = (event) => {
        const plnElement = document.querySelector(".js-pln");
        event.preventDefault();
       
        const rateEUR = 4.56;
        const rateUSD = 3.77;
        const rateGBP = 5.23;

        const plnValue = plnElement.value;
        const eurValue = plnValue / rateEUR;
        const usdValue = plnValue / rateUSD;
        const gbpValue = plnValue / rateGBP;
        showResult(eurValue, usdValue, gbpValue);
    }

    const resetForm = () => {
        eurElement.innerText = "0 EUR";
        usdElement.innerText = "0 USD";
        gbpElement.innerText = "0 GBP";
    }
    const init = () => {
        const form = document.querySelector(".js-form");
        const resetButton = document.querySelector(".js-resetButton");
        form.addEventListener("submit", submit);
        resetButton.addEventListener("reset", resetForm);
    }
init();

}

