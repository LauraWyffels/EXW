AFRAME.registerComponent(`crash-plane`, {
  init() {
    const $el = this.el; 
    $el.addEventListener(`click`, handleClickCrash);
  }
});

const handleClickCrash = () => {
  const planeParts = [...document.querySelectorAll(`.plane-part`)];
  const sky = document.querySelector(`.sky`);
  const bomb = document.querySelector(`.bomb`);

  [...planeParts, sky, bomb].forEach(part => {
    part.setAttribute(`template`, `src: #crashAnimation`);
  });
};
