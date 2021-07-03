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

// menuDropdown.addEventListener("click", function () {
//   this.classList.toggle("show");
//   this.addEventListener("mouseleave", function () {
//     this.classList.remove("show");
//   });
// });

window.onload = function () {
  const menuDropdown = document.querySelectorAll("li.link-dropdown");
  if (window.innerWidth > 767) {
    dropdownMouse(menuDropdown);
  } else {
    dropdownClick(menuDropdown);
  }
};
function dropdownMouse(dropdown) {
  dropdown.forEach((mn) => {
    mn.children[0].addEventListener("mouseenter", function () {
      this.parentElement.classList.toggle("show");
    });
    mn.children[1].addEventListener("mouseleave", function () {
      this.parentElement.classList.toggle("show");
    });
  });
}
function dropdownClick(dropdown) {
  dropdown.addEventListener("click", function () {
    this.classList.toggle("show");
  });
}

$("#struktur-team .owl-carousel").owlCarousel({
  stagePadding: 20,
  margin: 5,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    569: {
      items: 1,
    },
    767: {
      items: 2,
    },
  },
});
