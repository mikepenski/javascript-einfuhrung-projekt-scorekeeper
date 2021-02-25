/*
let amount = 0;

document.querySelector("#home .add-1").addEventListener("click", (e) => {
    amount++;
    document.querySelector("#home .amount > span").innerHTML = amount;
    console.log(amount);
});
*/

let amount_home = 0;
let amount_away = 0;

document.querySelectorAll('button').forEach(item => {

    item.addEventListener('click', event => {

    var dataValue = item.getAttribute('data-value');
    dataValue = parseInt(dataValue);

    if(item.parentElement.getAttribute("id") === "home"){
        amount_home = amount_home + dataValue;
        item.parentElement.querySelector(".item > .amount > span").innerHTML = amount_home;
    } else if(item.parentElement.getAttribute("id") === "away"){
        amount_away = amount_away + dataValue;
        item.parentElement.querySelector(".item > .amount > span").innerHTML = amount_away;
    } else if(item.classList.contains("reset") == true){
        document.querySelectorAll('.item > .amount > span').forEach(item => {
            item.innerHTML = 0;
            amount_home = 0;
            amount_away = 0;
            document.querySelector("#home .amount .team").innerHTML = "";
        document.querySelector("#away .amount .team").innerHTML = "";
        });
    }

    });
  });

/*** Modal ***/

var modal = document.querySelector("#teamModal");
var btn = document.querySelector(".teams");



// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}


document.querySelectorAll('.close').forEach(close_item => {
  close_item.addEventListener("click", (e) => {
    modal.style.display = "none";
  });
});


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let team1 = "";
let team2 = "";

document.querySelectorAll('input').forEach(item => {

    item.addEventListener('input', event => {

        if(item.getAttribute("id") === "team1"){
            team1 = item.value;
        } else {
            team2 = item.value;
        }

        document.querySelector("#home .amount .team").innerHTML = team1;
        document.querySelector("#away .amount .team").innerHTML = team2;
     

    });
  });
