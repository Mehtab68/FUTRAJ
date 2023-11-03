
/* profit calculator funtions */



function returnText(event) { 
    event.preventDefault();
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



/* search bar */

    function sendToPage(){
        var input = document.getElementById("search").value;
         //alert(input);
        if (input == "marquee"){
            location.href = "marquee.html";
            return false;
        }
        else if (input == "profit"){
            location.href = "index.html";
            return false;
        }
        else if(input == "about"){
            location.href = "about.html"
        }
        else if(input == "card"){
            location.href = "card.html"
        }
        else {
            alert('Invalid Input.');
        }
            }