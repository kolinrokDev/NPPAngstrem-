const videoEl = document.getElementById("video");
const playEl = document.getElementById("play");
const pauseEl = document.getElementById("pause");

let itemListEl = document.getElementById("services_list");
//Управление плеером
playEl.addEventListener("click", function () {
  videoEl.play();
  playEl.classList.add("visually-hidden");
  // pauseEl.classList.remove("visually-hidden");
});

pauseEl.addEventListener("click", function () {
  videoEl.pause();
  playEl.classList.remove("visually-hidden");
});
//Управление плашками
let listItemPanel = document.querySelectorAll(".services_item");
listItemPanel.forEach((element) => {
  element
    .querySelector(".services_item_row")
    .addEventListener("click", function (params) {
      if (
        element
          .querySelector(".services_item_text")
          .classList.contains("noShow")
      ) {
        element.classList.remove("services_item_higth");
        element.querySelector(".services_item_text").classList.remove("noShow");
      } else {
        element.classList.add("services_item_higth");
        element.querySelector(".services_item_text").classList.add("noShow");
      }
    });
});

//Управление модальным окном

function modalController({ modal, btnOpen, btnClose }) {
  const buttonFBEls = document.querySelectorAll(btnOpen);
  const modalEl = document.querySelector(modal);
  modalEl.style.cssText = `display:flex;
  flex-direction: column;
  visibiliti:hidden;
  opacity:0;
  transition:opacity 300ms ease-in-out;
  z-index:-1;`;

  const openMomal = () => {
    modalEl.style.visibility = "visible";
    modalEl.style.opacity = 1;
    modalEl.style.zIndex = 99;
    window.addEventListener("keydown", closeModal);
  };

  const closeModal = (event) => {
    const target = event.target;
    if (
      target === modalEl ||
      target.closest(btnClose) ||
      event.codde === "Escape"
    ) {
      modalEl.style.opacity = 0;

      setTimeout(() => {
        modalEl.style.visibility = "hidden";
        modalEl.style.zIndex = -1;
      }, 300);
      window.removeEventListener("keydown", closeModal);
    }
  };
  buttonFBEls.forEach((btn) => {
    btn.addEventListener("click", openMomal);
  });

  modalEl.addEventListener("click", closeModal);
}

modalController({
  modal: ".modal",
  btnOpen: "#buttonFB",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal_politik",
  btnOpen: ".privacyPolicy",
  btnClose: ".modal__close",
});
modalController({
  modal: ".burger_menu",
  btnOpen: ".mobil_menu_icon",
  btnClose: ".mobil__close",
});
// Копирование почты
const mailCV = document.querySelectorAll(".mail-position");
mailCV.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.querySelector(".mail-feed").style.top = "90px";
  });
  element.addEventListener("mouseout", function () {
    element.querySelector(".mail-feed").style.top = "40px";
  });
  element.querySelector(".mail").addEventListener("click", function () {
    navigator.clipboard.writeText("office@nppangstrem.tech").then(() => {
      element.querySelector(".mail").innerHTML = "Почта скопированна";
    });
    setTimeout(
      () =>
        (element.querySelector(".mail").innerHTML = "office@nppangstrem.tech"),
      1000
    );
  });
});
