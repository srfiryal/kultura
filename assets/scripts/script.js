const revealElements = document.querySelectorAll(".reveal");

const reveal = () => {
  for (let i = 0; i < revealElements.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = revealElements[i].getBoundingClientRect().top;
    let revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      revealElements[i].classList.add(`active`);
    }
  }
};
window.addEventListener(`scroll`, reveal);

reveal();
