
/* profit calculator funtions */



function returnText(event) { 
    let buyPrice = document.getElementById("buyPrice").value 
    let sellPrice = document.getElementById("sellPrice").value
    let numberPlayers = document.getElementById("numberPlayers").value
    var taxBuy = parseInt(sellPrice)-(parseInt(sellPrice)*0.05)
    var profit = (parseInt(taxBuy)-parseInt(buyPrice)) * parseInt(numberPlayers)
    var profitText = document.getElementById("profitText")
    localStorage.setItem("profitText", profit)
    let lol = localStorage.getItem("profitText")

    let profit1 = localStorage.getItem("profitText")
    console.log(profit1);


    if (profit1 >= 0) {
        profitText.textContent = "You made "  + profit + " coins"
    }  

    else {
        profitText.textContent = "You lost " + profit + " coins"
    }

    
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



/* fut champs calculator */

function champsCal(){
    let wins = document.getElementById("wins").value
    let loses = document.getElementById("loses").value
    var points = (parseInt(wins)*4) + (parseInt(loses))
    localStorage.setItem("totalPoints", points)
    var rankCal = document.getElementById("rankCalculator")
    let points1 = localStorage.getItem("totalPoints")
    console.log(points1);

    if (points1 <= 11 ){
        rankCal.textContent  = "Currently rank 7 " + "(" + points1 + " points )"
    } 
    else if (points1 <= 19 ){
        rankCal.textContent  = "Currently rank 6 " + "(" + points1 + " points )"
    } 
    else if (points1 <= 25 ){
        rankCal.textContent  = "Currently rank 5 " + "(" + points1 + " points )"
    }
    else if (points1 <= 31 ){
        rankCal.textContent  = "Currently rank 4 " + "(" + points1 + " points )"
    }
    else if (points1 <= 35 ){
        rankCal.textContent  = "Currently rank 3 " + "(" + points1 + " points )"
    }
    else if (points1 <= 39 ){
        rankCal.textContent  = "Currently rank 2 " + "(" + points1 + " points )"
    }
    else if (points1 == 40 ){
        rankCal.textContent  = "Currently rank 1 " + "(" + points1 + " points )"
    }
}

