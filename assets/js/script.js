const hamburgerMenu = document.querySelector(".hamburger");
const menus = document.getElementById("parent-menu");
hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("show");
  menus.classList.toggle("show");
});

//
window.onscroll = () => {
  const scroll = window.scrollY;

  document.querySelector(".my-nav").classList.toggle("show", scroll > 50);

  document
    .querySelector("button.to-top")
    .classList.toggle("show", scroll > 100);

  if (document.querySelector('a.child-menu[data-link="home"]')) {
    addActiveMenuOnScroll(linkActiveOnScroll(scroll));
  }
};
function linkActiveOnScroll(scroll) {
  let link = ["kontak", "struktur-team"];

  let result = "";
  link.forEach((el) => {
    let section = document.getElementById(el);
    if (el == "struktur-team") {
      section = section.parentElement;
    }
    if (section) {
      let top = section.offsetTop - 150;
      let sectionArea = top + section.offsetHeight;

      let obj = { id: el, area: sectionArea, top };

      if (scroll > obj.top && scroll < obj.area) {
        result = obj.id;
      }
    }
  });
  return result;
}
function addActiveMenuOnScroll(namaMenu) {
  if (!namaMenu) {
    namaMenu = "home";
  }

  const navMenu = document.querySelectorAll(".my-nav a.child-menu");

  navMenu.forEach((menu) => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
  const linkActive = document.querySelector(
    `a.child-menu[data-link="${namaMenu}"]`
  );
  if (linkActive) {
    linkActive.classList.add("active");
    let linkDropdownOrNot =
      linkActive.parentElement.parentElement.parentElement;

    if (linkDropdownOrNot.classList.contains("link-dropdown")) {
      linkDropdownOrNot.children[0].classList.add("active");
    }
  }
}

document.querySelector("button.to-top").addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const menuDropdown = document.querySelectorAll("li.link-dropdown");
menuDropdown.forEach((mn) => {
  mn.children[0].addEventListener("click", function () {
    this.parentElement.classList.toggle("show");
  });
});

// $("#struktur-team .owl-carousel").owlCarousel({
//   stagePadding: 30,
//   margin: 10,
//   dots: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     569: {
//       items: 1,
//     },
//     991: {
//       items: 2,
//     },
//     1400: {
//       items: 3,
//     },
//   },
// });
// $("#berita-terkini .owl-carousel").owlCarousel({
//   margin: 10,
//   stagePadding: 20,
//   dots: false,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     569: {
//       items: 2,
//     },
//   },
// });

// link prevent defaul
let linkMenu = Array.from(document.querySelectorAll("a.child-menu"));
const linkLogo = document.querySelector(".my-nav .logo a");
linkMenu.push(linkLogo);
linkMenu.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (link.classList.contains("dropdown-link")) {
      e.preventDefault();
    }
  });
});

// potong text yang memeiliki kelas show selengkapnya
let dataText = document.querySelectorAll(".show-selengkapnya");
dataText.forEach((text, i) => {
  let valueTxt = text.innerHTML.split("");

  let link = text.getAttribute("data-link");
  let maxString = text.getAttribute("data-max-string");

  let style =
    text.getAttribute("data-style-selengkapnya") == "text"
      ? textSelengkapnya(link)
      : btnSelengkapnya(link);

  if (valueTxt.length > parseInt(maxString)) {
    valueTxt = valueTxt.slice(0, parseInt(maxString));
    text.innerHTML = valueTxt.join("") + style;
  }
});
function textSelengkapnya(link) {
  return `<a href="${link}" class="text-small  text-decoration-none ">...selengkapnya</a>`;
}
function btnSelengkapnya(link) {
  return ` <button
              onclick="window.location.href='${link}'"
              class="hover-btn rounded text-small d-block  mt-2 py-2 px-3"
            >
              <span>Selengkapnya</span>
            </button>`;
}

let prevent = document.querySelectorAll(".prevent-default");

prevent.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Maaf, Link masih belum berfungsi");
  });
});

window.onload = function () {
  document.querySelector(".loading").classList.add("close");
};

// add lightbox for galery images
const galleries = document.querySelectorAll("#galeri img");
galleries.forEach((g) => {
  g.classList.add("add-lightbox");
  let oriHtml = g.parentElement.innerHTML;
  let src = g.getAttribute("src");
  let caption = g.nextElementSibling.innerHTML;

  // tambahkan element lightbox
  g.parentElement.innerHTML = elementLightbox("galeri", src, caption, oriHtml);
});

function elementLightbox(id, src, caption, childEl) {
  return `<a class="parent-lightbox" data-fancybox="${id}" data-caption="${caption}" data-src="${src}">${childEl}</a>`;
}
