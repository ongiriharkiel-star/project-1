const button = document.getElementByld("toggleButton");
const status = document.getElementByld("status");

let isOn = false

button.addeventListener("click",function(){isOn=!isOn;
    
    if(isOn){
        button.textContent = "Turn OFF";
        status.textContent = "Status:ON";
        status.style.color = "green";
    }else{
        button.textContent = "Turn ON"
        status.textcontent = "status:OFF";
        status.style.color = "red";
    }
})