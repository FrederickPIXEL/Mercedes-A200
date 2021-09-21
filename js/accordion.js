const list = document.querySelectorAll(".feature-sub");
const btns = document.querySelectorAll(".feature__link");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btns.forEach((btnItem, idx) => {
      if (btnItem === btn) {
        btnItem.classList.toggle("feature__link_active");
        list[idx].classList.toggle("hidden");
      } else {
        btnItem.classList.remove("feature__link_active");
        list[idx].classList.add("hidden");
      }
    });
  });
});
