const modalBtn = document.querySelectorAll(".open-modal");
const modal = document.querySelector(".modal-body-parent");
const crossBtn = document.querySelector(".crosse-btn");
const modalCloserBody = document.querySelector(".modal-closer-body");

const modalOpener = function () {
  modal.classList.remove("hidden");
  modalCloserBody.classList.add("transparent");
};

const modalCloser = () => {
  modal.classList.add("hidden");
  modalCloserBody.classList.remove("transparent");
};

for (let i = 0; i < modalBtn.length; i++) {
  const element = modalBtn[i];
  element.addEventListener("click", modalOpener);
}

crossBtn.addEventListener("click", modalCloser);

modalCloserBody.addEventListener("click", modalCloser);
