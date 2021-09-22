const tabsHandlerElams = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElams = document.querySelectorAll("[data-tabs-field]");

for (let btn of tabsHandlerElams) {
  btn.addEventListener("click", () => {
    tabsHandlerElams.forEach((item) =>
      item.classList.remove("design-list__item_active")
    );
    btn.classList.add("design-list__item_active");

    tabsContentElams.forEach((content) => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
}
