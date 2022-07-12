let popup = document.querySelector(".fizio__popup");
var popupBg = document.querySelector(".fizio__popup__bg");
var openPopupButtons = document.querySelectorAll(".fizio__btn");
document.querySelector
var closePopup = document.getElementsByClassName("fizio__close-popup")[0];

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



