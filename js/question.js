let popupss = document.querySelector(".header__question-popup");
var popupBgss = document.querySelector(".header__question-popup__bg");
var openPopupButtons = document.querySelectorAll(".header__popup-question");

var closePopupss = document.getElementsByClassName("header__question-close-popup")[0];

const buttonOpenss = [...openPopupButtons];

buttonOpenss.map((item) => {
    item.addEventListener("click", () => {
      popupBgss.style.display = "block";
      popupss.style.display = "block"
    });
  });

  closePopupss.onclick = function () {
    popupBgss.style.display = "none";
  };

