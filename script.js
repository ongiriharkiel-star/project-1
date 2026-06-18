const btn = document.getElementById ("toggleButton");
const stat = document.getElementById ("status");
let ON = false

btn.onclick = function() {
    ON=!ON;
      btn.textContent = ON ? "Turn OFF" : "Turn ON";
        stat.textContent = ON ? "Status:ON" : "Status:OFF";
        stat.style.color = ON ? "green" : "red"; 
    };
