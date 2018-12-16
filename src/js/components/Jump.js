AFRAME.registerComponent(`jump`, {
    init() {
        const $el = this.el; 
        $el.addEventListener(`click`, handleClickJump);
      }
});

const handleClickJump = () => {
    [...document.querySelectorAll(`.falling-object`)].forEach(obj => obj.setAttribute(`template`, `src: #jumpAnimation`));
};
  