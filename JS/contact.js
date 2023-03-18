let reportButton = document.getElementById("report");
let informationBlock = document.getElementById("contactInformations");
let emailBlock = document.getElementById("emailDialog");
let elements = document.getElementById("elements");
let clicked = false;

$(document).ready(function () {
    if (window.innerWidth > 720) {
        elements.style.marginTop = "0px";
    }
    else {
        elements.style.marginTop = "100px";
    }
});

reportButton.onclick = function () {
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