let userName;
let address;
let mainDish;
let drink;
let desert;
let priceMainDish;
let priceDrink;
let priceDesert;
let total;
let enable;
let userOrder;
let text = 'https://wa.me/5548984321748?text='

function check() {
    if (mainDish !== undefined && drink !== undefined && desert !== undefined) {
        document.querySelector(".order-button").style.backgroundColor = "#32B72F";
        document.querySelector(".order-button").innerHTML = "Fechar pedido";
        enable = true;
    }
}


// Select dishes functions

function selectMainDish(dish) {
    let selected = document.querySelector('.main.select');

    if (selected !== null) {
        selected.classList.remove('select');
    }

    dish.classList.add('select');
    mainDish = document.querySelector(".main.select .dish-title").innerText;
    priceMainDish = document.querySelector(".main.select span").innerText.replace(',', '.');
    check()
}

function selectDrink(dish) {
    let selected = document.querySelector('.drink.select');

    if (selected !== null) {
        selected.classList.remove('select');
    }

    dish.classList.add('select');
    drink = document.querySelector(".drink.select .dish-title").innerText;
    priceDrink = document.querySelector(".drink.select span").innerText.replace(',', '.');
    check()
}

function selectDesert(dish) {
    let selected = document.querySelector('.desert.select');

    if (selected !== null) {
        selected.classList.remove('select');
    }

    dish.classList.add('select');
    desert = document.querySelector(".desert.select .dish-title").innerText;
    priceDesert = document.querySelector(".desert.select span").innerText.replace(',', '.');
    check()
}

// Order functions

function order() {
    if (enable === true) {
        userName = prompt("Insira seu nome")
        address = prompt("Insira seu endereço")
        total = (parseFloat(priceMainDish) + parseFloat(priceDrink) + parseFloat(priceDesert)).toFixed(2);
        document.querySelector(".confirm-order").style.display = "flex";

        document.querySelector(".main-dish-name").innerHTML = mainDish;  
        document.querySelector(".main-dish-price").innerHTML = (`R$ ${priceMainDish.replace('.', ',')}`);  

        document.querySelector(".drink-name").innerHTML = drink;  
        document.querySelector(".drink-price").innerHTML = (`R$ ${priceDrink.replace('.', ',')}`);  

        document.querySelector(".desert-name").innerHTML = desert;  
        document.querySelector(".desert-price").innerHTML = (`R$ ${priceDesert.replace('.', ',')}`);  
        
        document.querySelector(".total-price").innerHTML = (`R$ ${total.replace('.', ',')}`);  
    }
}

function openOrder () {
    userOrder = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n\n- Prato: ${mainDish} \n- Bebida: ${drink} \n- Sobremesa: ${desert} \nTotal: R$ ${total.replace('.', ',')} \n \nNome: ${userName} \nEndereço: ${address}`
    );

    window.location.replace(text + userOrder)
}

// Cancel function

function cancel () {
    document.querySelector(".confirm-order").style.display = "none";
}