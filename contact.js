let reportButton = document.getElementById("report");
let informationBlock = document.getElementById("contactInformations");
let emailBlock = document.getElementById("emailDialog");
let clicked = false;

reportButton.onclick = function() {
    if (!clicked) {
        informationBlock.style.transition = 400 + 'ms ease';
        informationBlock.style.marginLeft = 150 + 'px';
    
        emailBlock.style.visibility = "visible";

        clicked = true;
    } else {
        informationBlock.style.transition = 400 + 'ms ease';
        informationBlock.style.marginLeft = 38 + '%';
    
        emailBlock.style.visibility = "hidden";

        clicked = false;
    }

};