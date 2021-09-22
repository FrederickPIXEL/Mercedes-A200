const tabsHandlerElams = document.querySelectorAll("[data-tabs-handler]");
const tabsHandlerElams = document.querySelectorAll("[data-tabs-field]");

for (let btn of tabsHandlerElams) {
  btn.addEventListener("click", () => {
    tabsHandlerElams.forEach((item) =>
      item.classList.remove("design-list__item-active")
    );
    btn.classList.add("design-list__item-active");

    tabsContentElems.forEach((content) => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
}
