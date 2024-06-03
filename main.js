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

const handleBoxBackgroundColor = (event) => {
    const currentBox = event.target

    currentBox.classList.toggle('active');

    if (currentBox.classList.contains('active')){
        currentBox.classList.add('bg-box');
        console.log ('hola')
    }else{
        currentBox.classList.remove('bg-box');
        console.log('adios')
    }
}

boxes.forEach(box => {
    box.addEventListener('mouseover',handleBoxBackgroundColor);
});



// Cazar el box container
// Escuchar cuando el ratón se pone encima. 
// Cuando se ponga encima clase active que se quita cuando se vaya. 
