// Declaração de variáveis
let select1 = false
let select2 = false
let select3 = false
let userName = ''
let address = ''
let mainDish = ''
let drink = ''
let desert = ''
let priceMainDish = 0
let priceDrink = 0
let priceDesert = 0
let total = 0
let userOrder = ''
let text = 'https://wa.me/5548984321748?text='
let previous_main = ''
let previous_drink = ''
let previous_desert = ''

function check() {
    if (select1 == true && select2 == true && select3 == true) {
        document.getElementById("order-button").style.backgroundColor = "#32B72F";
        document.getElementById("order-button").textContent = "Fechar pedido";
    }
}

// Select dishes function

function selectDish(dish, number) {
    if (dish === 'main') {
        if (select1 === false) {
            aux = 'main-' + number;
            previous_main = document.getElementById(aux);
            document.getElementById(aux).classList.toggle('select');
            select1 = true;
        }

        if (select1 === true) {
            previous_main.classList.toggle('select');
            aux = 'main-' + number;
            previous_main = document.getElementById(aux);
            document.getElementById(aux).classList.toggle('select');
        }

        mainDish = document.getElementById("main-1-title").innerText;
        priceMainDish = document.getElementById("price-main-1").innerText;
    }

    else if (dish === 'drink') {
        if (select2 === false) {
            aux = 'drink-' + number;
            previous_drink = document.getElementById(aux);
            document.getElementById(aux).classList.toggle('select');
            select2 = true;
        }

        if (select2 === true) {
            previous_drink.classList.toggle('select');
            aux = 'drink-' + number;
            previous_drink = document.getElementById(aux);
            document.getElementById(aux).classList.toggle('select');
        }

        drink = document.getElementById("drink-1-title").innerText;
        priceDrink = document.getElementById("price-drink-1").innerText;
        check()
    }

    else if(dish === 'desert') {
        if (select3 === false) {
            aux = 'desert-' + number;
            previous_desert = document.getElementById(aux);
            document.getElementById(aux).classList.toggle('select');
            select3 = true;
        }

        if (select3 === true) {
            previous_desert.classList.toggle('select');
            aux = 'desert-' + number;
            previous_desert = document.getElementById(aux);
            document.getElementById(aux).classList.toggle('select');
        }

        desert = document.getElementById("desert-1-title").innerText;
        priceDesert = document.getElementById("price-desert-1").innerText;
        check()
    }
}

// Order functions

function order() {
    userName = prompt("Insira seu nome")
    address = prompt("Insira seu endereço")
    total = parseInt(priceMainDish) + parseInt(priceDrink) + parseInt(priceDesert)
    document.getElementById("confirm-order").style.display = "flex";

    document.getElementById("main-dish-name").innerHTML = mainDish;  
    document.getElementById("main-dish-price").innerHTML = (`R$ ${priceMainDish}`);  

    document.getElementById("drink-name").innerHTML = drink;  
    document.getElementById("drink-price").innerHTML = (`R$ ${priceDrink}`);  

    document.getElementById("desert-name").innerHTML = desert;  
    document.getElementById("desert-price").innerHTML = (`R$ ${priceDesert}`);  
    
    document.getElementById("total-price").innerHTML = (`R$ ${total},00`);  
}

function openOrder () {
     userOrder = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n\n- Prato: ${mainDish} \n- Bebida: ${drink} \n- Sobremesa: ${desert} \nTotal: R$ ${total} \n \nNome: ${userName} \nEndereço: ${address}`
  );

     window.location.replace(text + userOrder)
}

// Cancel function

function cancel () {
    document.getElementById("confirm-order").style.display = "none";
}