/*let popups = document.querySelector(".header__account-popup");
const popupBgs = document.querySelector(".header__account-popup__bg");
const openPopupButton = document.querySelector(".header__account");
const closePopups = document.getElementsByClassName("header__close-popup")[0];

openPopupButton.addEventListener("click", () => {
    popupBgs.style.display = "block";
    popups.style.display = "block"
    
});

closePopups.addEventListener ("click", () => {
     popupBgs.style.display = "none";
});
window.addEventListener ("click", () => {
    popupBgs.style.display = "none";
});*/

let popups = document.querySelector(".header__account-popup");
var popupBgs = document.querySelector(".header__account-popup__bg");
var openPopupButtons = document.querySelectorAll(".header__account");

var closePopups = document.getElementsByClassName("header__account-close-popup")[0];

const buttonOpens = [...openPopupButtons];

buttonOpens.map((item) => {
    item.addEventListener("click", () => {
      popupBgs.style.display = "block";
      popups.style.display = "block"
    });
  });

  closePopups.onclick = function () {
    popupBgs.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == popupBgs) {
      popupBgs.style.display = "none";
    }
  };
