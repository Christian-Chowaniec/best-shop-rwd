const inputProducts = document.querySelector("#products")
const inputOrders = document.querySelector("#orders")

const selectInputID = document.querySelector("#package")
const calcInput = document.querySelector(".calc__input")

const selectInput = document.querySelector(".select__input")
const selectDropdown = document.querySelector(".select__dropdown")
const itemDropdown = document.querySelectorAll(".item__dropdown")
const itemList = document.querySelectorAll(".list__item")
const namePackage = document.querySelectorAll(".item__calc")
const pricePackage = document.querySelectorAll(".item__price")

const checkboxAccounting = document.querySelector("#accounting")
const checkboxTerminal = document.querySelector("#terminal")

// -------- do wyrzucenia
// const listProducts = document.querySelector("#products")  // tego nie moze byc, bedzie sie gryzło
// const listOrders = document.querySelector("#orders") // tego nie moze byc, bedzie sie gryzło
// const listPackage = document.querySelector("#package") // tego nie moze byc, bedzie sie gryzło
// const listAccounting = document.querySelector("#accounting") // tego nie moze byc, bedzie sie gryzło

// const totalPriceSummaryClass = document.querySelector("#summary__total")
const totalPriceSummary = document.querySelector("#total-price")
const totalPrice = document.querySelector(".total__price")



let itemPrices = {
    priceQuantity: 0,
    priceOrder: 0,
    pricePackage: 0,
    priceTerminal: 0,
    priceAccounting: 0,
}



// QUANTITY
inputProducts.addEventListener("input", function(){
    itemList[0].style.display = "flex"
})



// ORDERS
inputOrders.addEventListener("input", function(){
    itemList[1].style.display = "flex"
})



// CHOOSE PACKAGE

selectInput.addEventListener("click", function () {
    selectDropdown.style.display = "block"
    selectInput.style.boxShadow = "0 0 10px rgb(8, 166, 228)"
})
selectDropdown.addEventListener("click", function () {
    selectDropdown.style.display = "none"
    selectInput.style.boxShadow = ""
})

itemDropdown[0].addEventListener("click",(InfoBasic))
itemDropdown[0].addEventListener("click",(allSum))

itemDropdown[1].addEventListener("click",(InfoProfessional))
itemDropdown[1].addEventListener("click",(allSum))

itemDropdown[2].addEventListener("click",(InfoPremium))
itemDropdown[2].addEventListener("click",(allSum))

function InfoBasic() {
    let price = 5
    selectInput.innerText = itemDropdown[0].innerText
    namePackage[2].innerText = "Basic"
    pricePackage[2].innerText = "$" + price
    itemPrices.pricePackage = price
}
function InfoProfessional() {
    let price = 10
    selectInput.innerText = itemDropdown[1].innerText
    namePackage[2].innerText = "Professional"
    pricePackage[2].innerText = "$" + price
    itemPrices.pricePackage = price
}
function InfoPremium() {
    let price = 15
    selectInput.innerText = itemDropdown[2].innerText
    namePackage[2].innerText = "Premium"
    pricePackage[2].innerText = "$" + price
    itemPrices.pricePackage = price
}
function allSum() {
    itemList[2].style.display = "flex"
    selectInput.style.color = "black"
    totalPrice.innerText =  "$" + itemPrices.priceQuantity + itemPrices.priceOrder + itemPrices.pricePackage + itemPrices.priceTerminal + itemPrices.priceAccounting
}

// -------- do wyrzucenia
// itemDropdown[0].addEventListener("click", function () {
//     let price = 0
//     selectInput.innerText = itemDropdown[0].innerText
//     itemList[2].style.display = "flex"
//     namePackage[2].innerText = "Basic"
//     selectInput.style.color = "black"
//     pricePackage[2].innerText = "$" + price
//     itemPrices.pricePackage = price
//     totalPrice.innerText =  "$" + itemPrices.priceQuantity + itemPrices.priceOrder + itemPrices.pricePackage + itemPrices.priceTerminal + itemPrices.priceAccounting
// })
// itemDropdown[1].addEventListener("click", function () {
//     let price = 10
//     selectInput.innerText = itemDropdown[1].innerText
//     itemList[2].style.display = "flex"
//     namePackage[2].innerText = "Professional"
//     selectInput.style.color = "black"
//     pricePackage[2].innerText = "$" + price
//     itemPrices.pricePackage = price
//     totalPrice.innerText =  "$" + itemPrices.priceQuantity + itemPrices.priceOrder + itemPrices.pricePackage + itemPrices.priceTerminal + itemPrices.priceAccounting
// })
// itemDropdown[2].addEventListener("click", function () {
//     let price = 15
//     selectInput.innerText = itemDropdown[2].innerText
//     itemList[2].style.display = "flex"
//     namePackage[2].innerText = "Premium"
//     selectInput.style.color = "black"
//     pricePackage[2].innerText = "$" + price
//     itemPrices.pricePackage = price
//     totalPrice.innerText =  "$" + itemPrices.priceQuantity + itemPrices.priceOrder + itemPrices.pricePackage + itemPrices.priceTerminal + itemPrices.priceAccounting
// })



// CHECKBOX
checkboxAccounting.addEventListener("click", function () {
    if (checkboxAccounting.checked){
        itemList[3].style.display = "flex"
        // price.accountingPrice = 5
    console.log("on.checkboxAccounting")}
    else {
        itemList[3].style.display = "none"
        // price.accountingPrice = 0
        console.log("off.checkboxAccounting")
    }
})
checkboxTerminal.addEventListener("click", function () {
    if (checkboxTerminal.checked){
        itemList[4].style.display = "flex"
        // price.terminalPrice = 7
        console.log("on.checkboxTerminal")}
    else {
        itemList[4].style.display = "none"
        // price.terminalPrice = 0
        console.log("off.checkboxTerminal")

    }
})



//TOTAL SUMMARY
totalPriceSummary.style.display = "flex";

// zostało do zrobienia dodawanie produktów,ilosc,checkboxy i wybranie pakietu
//to be continued
