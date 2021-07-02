const hamburgerMenu = document.querySelector(".hamburger");
const menus = document.getElementById("parent-menu");
hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("show");
  menus.classList.toggle("show");
});

//
window.onscroll = () => {
  document
    .querySelector(".my-nav")
    .classList.toggle("show", window.scrollY > 50);
};

const menuDropdown = document.querySelector("li.link-dropdown");
// menuDropdown.addEventListener("click", function () {
//   this.classList.toggle("show");
//   this.addEventListener("mouseleave", function () {
//     this.classList.remove("show");
//   });
// });
menuDropdown.addEventListener("click", function () {
  this.classList.toggle("show");
});
window.onload = function () {
  if (window.innerWidth > 767) {
    menuDropdown.children[0].addEventListener("mouseenter", function () {
      this.parentElement.classList.toggle("show");
    });
    menuDropdown.children[1].addEventListener("mouseleave", function () {
      this.parentElement.classList.toggle("show");
    });
  }
};
