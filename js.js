//Phone increase button event handler
var phonePlusBtn = document.getElementById("phnPlus");
phonePlusBtn.addEventListener("click", function(){
    var initPrice = 1219;
    getInput("phoneInput", 1);
    getPrice("phonePrice", initPrice);
    getPrice("subTotal", initPrice)
    getPrice("total", initPrice)
})

//Phone decrease button event handler
var phoneMinusBtn = document.getElementById("phnMinus");
phoneMinusBtn.addEventListener("click", function(){
    var initPrice = -1219;
    var input = parseFloat(document.getElementById("phoneInput").value);
    if (input > 1) {
        getInput("phoneInput", -1)
        getPrice("phonePrice", initPrice);
        getPrice("subTotal", initPrice);
        getPrice("total", initPrice);
    }
})

//Case increase button event handler
var casePlusBtn = document.getElementById("casePlus");
casePlusBtn.addEventListener("click", function(){
    var initPrice = 59;
    getInput("caseInput", 1);
    getPrice("casePrice", initPrice);
    getPrice("subTotal", initPrice);
    getPrice("total", initPrice);
})

//Case decrease button event handler
var caseMinus = document.getElementById("caseMinus");
caseMinus.addEventListener("click", function(){
    var initPrice = -59;
    var input = parseFloat(document.getElementById("caseInput").value);
    if (input > 1) {
        getInput("caseInput", -1);
        getPrice("casePrice", initPrice);
        getPrice("subTotal", initPrice);
        getPrice("total", initPrice);
    }
})
//get input function
function getInput(id, plusMinus){
    const input = parseFloat(document.getElementById(id).value);
    const total = input + plusMinus;
    document.getElementById(id).value = total;
}
//Get price function
function getPrice(id, plusMinus){
    const price = parseFloat(document.getElementById(id).innerText);
    const totalPrice = price + plusMinus;
    document.getElementById(id).innerText = totalPrice;
}


//Phone reset button event handler
var resetPhone = document.getElementById("resetPhone");
resetPhone.addEventListener("click", function(){
    var amount = 1219;
    document.getElementById("phoneInput").value = 1;  
    var price = parseFloat(document.getElementById("phonePrice").innerText);
    document.getElementById("phonePrice").innerText = 1219;

    resetPrice("subTotal", price, amount)
    resetPrice("total", price, amount);
})

//Case reset button event handler
var resetCase = document.getElementById("resetCase");
resetCase.addEventListener("click", function(){
    var amount = 59;
    document.getElementById("caseInput").value = 1;
    var price = parseFloat(document.getElementById("casePrice").innerText);
    document.getElementById("casePrice").innerText = 59;

    resetPrice("subTotal", price, amount);
    resetPrice("total", price, amount);
})
// Reset function
function resetPrice(id,price,amount){
    var total = parseFloat(document.getElementById(id).innerText);
    var totalAmount = total - price;
    document.getElementById(id).innerText = totalAmount + amount;
}

//Check out alert
const checkOut = document.getElementById("checkOut");
checkOut.addEventListener("click", function(){
    alert("Are you sure to check out?")
})
