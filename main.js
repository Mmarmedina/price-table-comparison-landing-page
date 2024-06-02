let priceToggle = document.querySelector('.price-toggler');
let price = document.querySelectorAll('.price');
let duration = document.querySelectorAll('.duration');

let discount = 1.25;

priceToggle.onclick = () =>{
    priceToggle.classList.toggle('active');

    if (priceToggle.classList.contains('active')) {
        for (let k = 0; k < price.length; k++) {
            const priceTypeNumber = parseInt(price[k].innerText);
            console.log (typeof(priceTypeNumber));
            console.log (priceTypeNumber);
            price[k].innerText = priceTypeNumber * discount; 
            price[k].innerText = Math.floor(priceTypeNumber * discount);
            console.log (price[k]);          
        }
    }else {
        // for (let i = 0; i < duration.length; i++) {
        //     duration[i].innerText = '/mes';
            
        // } 
        for (let k = 0; k < price.length; k++) {
            price[k].innerText = price[k].innerText / discount;
            price[k].innerText = Math.ceil(price[k].innerText);
        }  
    }
}
