let select1 = false
let select2 = false
let select3 = false
let userName = ''
let address = ''
mainDish = ''
drink = ''
desert = ''
priceMainDish = 0
priceDrink = 0
priceDesert = 0
total = 0



function check() {
    if (select1 == true && select2 == true && select3 == true) {
        document.getElementById("order-button").style.backgroundColor = "#32B72F";
        document.getElementById("order-button").textContent = "Fechar pedido";
    }
}

// Select main dish function

function selectMainDish1 () {
    document.getElementById("main-1").style.border = "5px solid #32B72F";
    document.getElementById("main-2").style.border = "5px solid transparent";
    document.getElementById("main-3").style.border = "5px solid transparent";
    document.getElementById("main-4").style.border = "5px solid transparent";
    mainDish = document.getElementById("main-1-title").innerText;
    priceMainDish = document.getElementById("price-main-1").innerText;
    select1 = true;
    check()
}

function selectMainDish2 () {
    document.getElementById("main-2").style.border = "5px solid #32B72F";
    document.getElementById("main-1").style.border = "5px solid transparent";
    document.getElementById("main-3").style.border = "5px solid transparent";
    document.getElementById("main-4").style.border = "5px solid transparent";
    mainDish = document.getElementById("main-2-title").innerText;
    priceMainDish = document.getElementById("price-main-2").innerText;
    select1 = true;
    check()
}

function selectMainDish3 () {
    document.getElementById("main-3").style.border = "5px solid #32B72F";
    document.getElementById("main-1").style.border = "5px solid transparent";
    document.getElementById("main-2").style.border = "5px solid transparent";
    document.getElementById("main-4").style.border = "5px solid transparent";
    mainDish = document.getElementById("main-3-title").innerText;
    priceMainDish = document.getElementById("price-main-3").innerText;
    select1 = true;
    check()
}

function selectMainDish4 () {
    document.getElementById("main-4").style.border = "5px solid #32B72F";
    document.getElementById("main-1").style.border = "5px solid transparent";
    document.getElementById("main-2").style.border = "5px solid transparent";
    document.getElementById("main-3").style.border = "5px solid transparent";
    mainDish = document.getElementById("main-4-title").innerText;
    priceMainDish = document.getElementById("price-main-4").innerText;
    select1 = true;
    check()
}

// Select drink functions

function selectDrink1 () {
    document.getElementById("drink-1").style.border = "5px solid #32B72F";
    document.getElementById("drink-2").style.border = "5px solid transparent";
    document.getElementById("drink-3").style.border = "5px solid transparent";
    document.getElementById("drink-4").style.border = "5px solid transparent";
    drink = document.getElementById("drink-1-title").innerText;
    priceDrink = document.getElementById("price-drink-1").innerText;
    select2 = true;
    check()
}

function selectDrink2 () {
    document.getElementById("drink-2").style.border = "5px solid #32B72F";
    document.getElementById("drink-1").style.border = "5px solid transparent";
    document.getElementById("drink-3").style.border = "5px solid transparent";
    document.getElementById("drink-4").style.border = "5px solid transparent";
    drink = document.getElementById("drink-2-title").innerText;
    priceDrink = document.getElementById("price-drink-2").innerText;
    select2 = true;
    check()
}

function selectDrink3 () {
    document.getElementById("drink-3").style.border = "5px solid #32B72F";
    document.getElementById("drink-1").style.border = "5px solid transparent";
    document.getElementById("drink-2").style.border = "5px solid transparent";
    document.getElementById("drink-4").style.border = "5px solid transparent";
    drink = document.getElementById("drink-3-title").innerText;
    priceDrink = document.getElementById("price-drink-3").innerText;
    select2 = true;
    check()
}

function selectDrink4 () {
    document.getElementById("drink-4").style.border = "5px solid #32B72F";
    document.getElementById("drink-1").style.border = "5px solid transparent";
    document.getElementById("drink-2").style.border = "5px solid transparent";
    document.getElementById("drink-3").style.border = "5px solid transparent";
    drink = document.getElementById("drink-4-title").innerText;
    priceDrink = document.getElementById("price-drink-4").innerText;
    select2 = true;
    check()
}

// Select desert functions

function selectDesert1 () {
    document.getElementById("desert-1").style.border = "5px solid #32B72F";
    document.getElementById("desert-2").style.border = "5px solid transparent";
    document.getElementById("desert-3").style.border = "5px solid transparent";
    document.getElementById("desert-4").style.border = "5px solid transparent";
    desert = document.getElementById("desert-1-title").innerText;
    priceDesert = document.getElementById("price-desert-1").innerText;
    select3 = true;
    check()
}

function selectDesert2 () {
    document.getElementById("desert-2").style.border = "5px solid #32B72F";
    document.getElementById("desert-1").style.border = "5px solid transparent";
    document.getElementById("desert-3").style.border = "5px solid transparent";
    document.getElementById("desert-4").style.border = "5px solid transparent";
    desert = document.getElementById("desert-2-title").innerText;
    priceDesert = document.getElementById("price-desert-2").innerText;
    select3 = true;
    check()
}

function selectDesert3 () {
    document.getElementById("desert-3").style.border = "5px solid #32B72F";
    document.getElementById("desert-1").style.border = "5px solid transparent";
    document.getElementById("desert-2").style.border = "5px solid transparent";
    document.getElementById("desert-4").style.border = "5px solid transparent";
    desert = document.getElementById("desert-3-title").innerText;
    priceDesert = document.getElementById("price-desert-3").innerText;
    select3 = true;
    check()
}

function selectDesert4 () {
    document.getElementById("desert-4").style.border = "5px solid #32B72F";
    document.getElementById("desert-1").style.border = "5px solid transparent";
    document.getElementById("desert-2").style.border = "5px solid transparent";
    document.getElementById("desert-3").style.border = "5px solid transparent";
    desert = document.getElementById("desert-4-title").innerText;
    priceDesert = document.getElementById("price-desert-4").innerText;
    select3 = true;
    check()
}

// Order function

function order() {
    userName = prompt("Insira seu nome")
    address = prompt("Insira seu endereço")
}

