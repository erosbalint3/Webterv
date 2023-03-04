let reportButton = document.getElementById("report");
let informationBlock = document.getElementById("contactInformations");
let emailBlock = document.getElementById("emailDialog");
let clicked = false;

reportButton.onclick = function() {
    if (!clicked) {
        informationBlock.style.transition = 400 + 'ms ease';
        informationBlock.style.marginRight = "10px";
    
        emailBlock.style.display = "block";

        clicked = true;
    } else {
        informationBlock.style.transition = 400 + 'ms ease';
        informationBlock.style.marginRight = "0px";
    
        emailBlock.style.display = "none";

        clicked = false;
    }

};