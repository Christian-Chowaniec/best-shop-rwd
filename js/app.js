const inputProducts = document.querySelector("#products")
const inputOrders = document.querySelector("#orders")
const itemList = document.querySelectorAll(".list__item")
const namePackage = document.querySelectorAll(".item__calc")
const pricePackage = document.querySelectorAll(".item__price")

const selectInput = document.querySelector(".select__input")
const selectDropdown = document.querySelector(".select__dropdown")
const itemDropdown = document.querySelectorAll(".item__dropdown")

const checkboxAccounting = document.querySelector("#accounting")
const checkboxTerminal = document.querySelector("#terminal")

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
inputProducts.addEventListener("input", function () {
    itemList[0].style.display = "flex"
    inputProducts.style.color = "black"
    let quantity = inputProducts.value
    let quantitySummary = inputProducts.value * 3
    let replaceNamePackage = document.querySelector(".item__calc")
    let pricePackage = document.querySelector(".item__price")

    if (inputProducts.value > 0) {
        replaceNamePackage.innerText = quantity + " * " + "$3"
        pricePackage.innerText = "$" + quantitySummary
    } else {
        replaceNamePackage.innerText = "error"
        pricePackage.innerText = "$" + 0
        quantitySummary = 0
    }
    itemPrices.priceQuantity = quantitySummary
    allSum()
})
// ORDERS
inputOrders.addEventListener("input", function () {
    itemList[1].style.display = "flex"
    inputOrders.style.color = "black"
    let quantity = inputOrders.value
    let quantitySummary = inputOrders.value * 0.5
    let replaceNamePackage = document.querySelectorAll(".item__calc")
    let pricePackage = document.querySelectorAll(".item__price")

    if (inputOrders.value > 0) {
        replaceNamePackage[1].innerText = quantity + " * " + "$0.5"
        pricePackage[1].innerText = "$" + quantitySummary
    } else {
        replaceNamePackage[1].innerText = "error"
        pricePackage[1].innerText = "$" + 0
        quantitySummary = 0
    }
    itemPrices.priceOrder = quantitySummary
    allSum()
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
itemDropdown[0].addEventListener("click", (infoBasic))
itemDropdown[1].addEventListener("click", (infoProfessional))
itemDropdown[2].addEventListener("click", (infoPremium))

function infoBasic() {
    let price = 0
    selectInput.innerText = itemDropdown[0].innerText
    namePackage[2].innerText = "Basic"
    pricePackage[2].innerText = "$" + price
    itemPrices.pricePackage = price
    itemList[2].style.display = "flex"
    selectInput.style.color = "black"
    allSum()
}

function infoProfessional() {
    let price = 25
    selectInput.innerText = itemDropdown[1].innerText
    namePackage[2].innerText = "Professional"
    pricePackage[2].innerText = "$" + price
    itemPrices.pricePackage = price
    itemList[2].style.display = "flex"
    selectInput.style.color = "black"
    allSum()
}

function infoPremium() {
    let price = 60
    selectInput.innerText = itemDropdown[2].innerText
    namePackage[2].innerText = "Premium"
    pricePackage[2].innerText = "$" + price
    itemPrices.pricePackage = price
    itemList[2].style.display = "flex"
    selectInput.style.color = "black"
    allSum()
}
// CHECKBOX
checkboxAccounting.addEventListener("click", function () {
    if (checkboxAccounting.checked) {
        itemList[3].style.display = "flex"
        itemPrices.priceAccounting = 5
    } else {
        itemList[3].style.display = "none"
        itemPrices.priceAccounting = 0
    }
    allSum()
})
checkboxTerminal.addEventListener("click", function () {
    if (checkboxTerminal.checked) {
        itemList[4].style.display = "flex"
        itemPrices.priceTerminal = 2
    } else {
        itemList[4].style.display = "none"
        itemPrices.priceTerminal = 0
    }
    allSum()
})
//TOTAL SUMMARY
totalPriceSummary.style.display = "flex";

function allSum() {
    totalPrice.innerText = "$" + (itemPrices.priceQuantity + +itemPrices.priceOrder + +itemPrices.pricePackage + +itemPrices.priceTerminal + +itemPrices.priceAccounting)
    console.log(totalPrice.innerText)
}