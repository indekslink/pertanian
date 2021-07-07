const itemFooter = document.querySelectorAll("footer .title-footer");
const titleSectionContent = document.querySelectorAll(".title-section-content");
titleSectionContent.forEach((tsc) => {
  tsc.dataset.aos = "fade-up";
});
itemFooter.forEach((item) => {
  item.parentElement.dataset.aos = "fade-up";
});
AOS.init({
  once: true,
});
