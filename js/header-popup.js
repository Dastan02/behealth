let popup = document.querySelector(".header__popup");
var popupBg = document.querySelector(".header__popup__bg");
var openPopupButtons = document.querySelectorAll(".header__item1");
document.querySelector
var closePopup = document.getElementsByClassName("header__close-popup")[0];

const buttonOpen = [...openPopupButtons];

buttonOpen.map((item) => {
    item.addEventListener("click", () => {
      popupBg.style.display = "block";
      popup.style.display = "block"
    });
  });

  closePopup.onclick = function () {
    popupBg.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == popupBg) {
      popupBg.style.display = "none";
    }
  };
