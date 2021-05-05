{
    const form = document.querySelector(".js-form");
    const plnElement = document.querySelector(".js-pln");
    const eurElement = document.querySelector(".js-eur");
    const usdElement = document.querySelector(".js-usd");
    const gbpElement = document.querySelector(".js-gbp");
    

    const rateEUR = 4.56;
    const rateUSD = 3.77;
    const rateGBP = 5.23;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const plnValue = plnElement.value;
        const eurValue = plnValue / rateEUR;
        const usdValue = plnValue / rateUSD;
        const gbpValue = plnValue / rateGBP;
    
        eurElement.innerText = eurValue.toFixed(2) + " EUR";
        usdElement.innerText = usdValue.toFixed(2) + " USD";
        gbpElement.innerText = gbpValue.toFixed(2) + " GBP";
    
    });
    
    form.addEventListener("reset", () => {
    
        eurElement.innerText = "0 EUR";
        usdElement.innerText = "0 USD";
        gbpElement.innerText = "0 GBP";
    })

}
