
/* profit calculator funtions */

function returnText() {
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

function playerName(){
for (let i = 0; i < 10; i++){
    var j = i.toString()
    link = "https://futdb.app/api/players?page=" + j
    


fetch(link, {
  headers: {
    Accept: "application/json",
    "X-Auth-Token": "fe678785-ace6-463a-9909-7cc2cf2ec27c"
  }
})
    .then(res => { 
       return res.json()
    })
    .then(data => {
    data.items.forEach(user => {
        const markup = `<li>${user.lastName}</li>`;
        
        availableKeywords.push(`${user.lastName}` + ` ${user.rating}`);
    })
})
    .catch(error => console.log(error))

}}


playerName()

/* Search Bar for players */

let availableKeywords = [];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}


function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>"
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}




/* Card Style */

document.getElementById("playerForm").playerCard.onchange = function(){
    var cardStyle = this.value
    document.getElementById("cardStyle").src = "./images/cardTypes/" + cardStyle + ".png" 
}


/* first Owner badge with JQuery */

    $('#firstOwner').on("click", function(){
        if( $('#firstOwner1').is(':hidden')) {
        $('#firstOwner1').show();
        }else{
        $('#firstOwner1').hide();
        }
    });

/* Chem Style */

document.getElementById("playerForm").chemistryStyle.onchange = function(){
    var chemistryStyle = this.value
    document.getElementById("chemStyle").src = "./images/chemistryStyles/" + chemistryStyle + ".png" 
}

function searchPlayer(){
    var player = document.getElementById("input-box").value;
    var rating = player.replace(/\D/g,'');
    player = player.replace(/\d+/g, '');
    player = player.replace(/\s/g, '');
    
    

    for (let i = 0; i < 10; i++){
        var j = i.toString()
        link = "https://futdb.app/api/players?page=" + j
        
    
    
    fetch(link, {
      headers: {
        Accept: "application/json",
        "X-Auth-Token": "fe678785-ace6-463a-9909-7cc2cf2ec27c"
      }
    })
        .then(res => { 
           return res.json()
        })
        .then(data => {
        data.items.forEach(user => {

            if(`${user.lastName}` == player && `${user.rating}` == rating){
                
                div.innerHTML += ""
                div.innerHTML += "Pace :" + ` ${user.pace}`

            }
           
        })
    })
        .catch(error => console.log(error))
    
    }

}


/* AI CHAT BOT */
