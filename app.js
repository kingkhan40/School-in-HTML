const navbar = () => {
  const navUl = document.querySelector(".nav__ul");
  const burger = document.querySelector(".nav__burger");
  burger.addEventListener("click", () => {
    navUl.classList.toggle("nav__show");
    burger.classList.toggle("nav__toggle");
  });
};
navbar();

/////////////////////////////////////////////////////////////
// smoth scroll
/////////////////////////////////////////////////////////////

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});
