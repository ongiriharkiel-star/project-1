const btn = document.getElementById ("toggleButton");
const stat = document.getElementById ("status");
let ON = false

btn.onclick = function() {
    ON=!ON;
      btn.textContent = ON ? "Turn OFF" : "Turn ON";
        stat.textContent = ON ? "Status:ON" : "Status:OFF";
        stat.style.color = ON ? "green" : "red"; 
document.body.style.backgroundColor = ON ?"#1a1a2e": "#f4f4f4";
document.body.style.color = ON ?"#ffff" : "#222"};
    const countDisplay = document.getElementById("count")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
let count = 0
increaseBtn.onclick = function (){
  count = count+1;
  countDisplay.textContent=count};


decreaseBtn.onclick = function(){
  count =count-1;
  countDisplay.textContent =count};