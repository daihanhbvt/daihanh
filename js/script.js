// Menu

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

menuToggle.addEventListener("click", changeStateMenu = () => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
});
// Menu

/* Menu fixed */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
/* Menu fixed */

/* Animation */
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
const elementsToShow = document.querySelectorAll(".animate");
const elementProgressToShow = document.querySelectorAll(
  ".skill-progress__have"
);

const loop = () => {
  elementsToShow.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("animation");
    } else {
      element.classList.remove("animation");
    }
  });
  elementProgressToShow.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("progress-animation");
    } else {
      element.classList.remove("progress-animation");
    }
  });
  scroll(loop);
};
loop();
/* Animation */

/* Button down */
const scrollDown = document.getElementById("down");
scrollDown.addEventListener("click", () => {
  this.location.href = "#about-me";
});
/* Button down */

/* Button scroll to top */
const scrollToTop = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.classList.remove("none");
    scrollToTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
  } else {
    scrollToTop.classList.add("none");
  }
});
/* Button scroll to top */
