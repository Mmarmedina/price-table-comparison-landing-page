let priceToggle = document.querySelector('.price-toggler');
let price = document.querySelectorAll('.price');
let duration = document.querySelectorAll('.duration');
let boxes = document.querySelectorAll('.box');

let discount = 1.25;

priceToggle.onclick = () =>{
    priceToggle.classList.toggle('active');

    if (priceToggle.classList.contains('active')) {
        for (let k = 0; k < price.length; k++) {
            const priceTypeNumber = parseInt(price[k].innerText);
            price[k].innerText = priceTypeNumber * discount; 
            price[k].innerText = Math.floor(priceTypeNumber * discount);
            console.log (price[k]);          
        }
    }else {
        for (let k = 0; k < price.length; k++) {
            price[k].innerText = price[k].innerText / discount;
            price[k].innerText = Math.ceil(price[k].innerText);
        }  
    }
}

const handleMouseEnter = (event) => {
    const currentBox = event.target;
    currentBox.classList.toggle('active');
    if(currentBox.classList.contains('active')){
        currentBox.classList.add('bg-box');
    }
}

const handleMouseLeave = (event) => {
    const currentBox = event.target
    if(currentBox.classList.contains('bg-box')){
        currentBox.classList.remove('bg-box', 'active');
    }
}

boxes.forEach(box => {
    box.addEventListener('mouseenter',handleMouseEnter);
    box.addEventListener('mouseleave',handleMouseLeave);
});









