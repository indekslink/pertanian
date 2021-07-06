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

  document
    .querySelector("button.to-top")
    .classList.toggle("show", window.scrollY > 100);
};

document.querySelector("button.to-top").addEventListener("click", function () {
  window.scrollTo(0, 0);
});
// menuDropdown.addEventListener("click", function () {
//   this.classList.toggle("show");
//   this.addEventListener("mouseleave", function () {
//     this.classList.remove("show");
//   });
// });

const menuDropdown = document.querySelectorAll("li.link-dropdown");
menuDropdown.forEach((mn) => {
  mn.children[0].addEventListener("click", function () {
    this.parentElement.classList.toggle("show");
  });
});

$("#struktur-team .owl-carousel").owlCarousel({
  stagePadding: 30,
  margin: 10,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    569: {
      items: 1,
    },
    991: {
      items: 2,
    },
    1400: {
      items: 3,
    },
  },
});
$("#berita-terkini .owl-carousel").owlCarousel({
  margin: 10,
  stagePadding: 20,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    569: {
      items: 2,
    },
  },
});

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

  let link = "/team/" + i;
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
  return `<a href="${link}" class="text-small  text-decoration-none prevent-default">...selengkapnya</a>`;
}
function btnSelengkapnya(link) {
  return ` <button
            
              class="hover-btn rounded text-small d-block prevent-default  mt-2 py-2 px-3"
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

  // tambahakn element lightbox
  g.parentElement.innerHTML = elementLightbox("galeri", src, caption, oriHtml);
});

function elementLightbox(id, src, caption, childEl) {
  return `<a class="parent-lightbox" data-fancybox="${id}" data-caption="${caption}" data-src="${src}">${childEl}</a>`;
}
