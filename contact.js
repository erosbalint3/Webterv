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

        if (window.innerWidth > 1400) {
            elements.style.marginTop = "200px";
        } else {
            elements.style.marginTop = "550px";
        }
        $(window).resize(function () {
            if (window.innerWidth > 1400) {
                elements.style.marginTop = "200px";
            } else {
                elements.style.marginTop = "550px";
            }
        });

        emailBlock.style.display = "block";

        clicked = true;
    } else {
        informationBlock.style.transition = 400 + 'ms ease';
        informationBlock.style.marginRight = "0px";

        if (window.innerWidth > 720) {
            elements.style.marginTop = "0px";
        }
        else {
            elements.style.marginTop = "100px";
        }
        $(window).resize(function () {
            if (window.innerWidth > 720) {
                elements.style.marginTop = "0px";
            }
            else {
                elements.style.marginTop = "100px";
            }
        });

        emailBlock.style.display = "none";

        clicked = false;
    }

};