let popup = document.querySelector(".nevro__popup");
var popupBg = document.querySelector(".nevro__popup__bg");
var openPopupButtons = document.querySelectorAll(".nevro__btn");
document.querySelector
var closePopup = document.getElementsByClassName("nevro__close-popup")[0];

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



