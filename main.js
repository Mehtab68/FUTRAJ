function returnText() {
    let buyPrice = document.getElementById("buyPrice").value 
    let sellPrice = document.getElementById("sellPrice").value
    let numberPlayers = document.getElementById("numberPlayers").value
    var taxBuy = parseInt(sellPrice)-(parseInt(sellPrice)*0.05)
    var profit = (parseInt(taxBuy)-parseInt(buyPrice)) * parseInt(numberPlayers)
    var profitText = document.getElementById("profitText")

    localStorage.setItem("profitText", profit)
    let lol = localStorage.getItem("profitText")

}





let profit = localStorage.getItem("profitText")
console.log(profit);


if (profit >= 0) {
    profitText.textContent += "You made " + profit + " coins"
    }  
   else {
        profitText.textContent += "You lost " + profit + " coins"
    }

