var container = document.querySelector(".elecontainer");
var fixed = document.querySelector(".fixed");
container.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
container.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
var image = document.querySelectorAll(".element1");
image.forEach(function (img) {
  img.addEventListener("mouseenter", function () {
    var imr = img.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${imr})`;
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function loader() {
  let loading = document.querySelector(".loader");
  let h1 = loading.querySelector("h2");
  function textChange() {
    setTimeout(function () {
      h1.innerText = "EXPERIENCES";
    }, 1000);
    setTimeout(function () {
      h1.innerText = "CONTENTS";
    }, 2000);
  }
  textChange();
  setTimeout(function () {
    loading.style.top = "-100%";
  }, 3000);
}
loader();