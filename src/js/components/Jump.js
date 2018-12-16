AFRAME.registerComponent(`jump`, {
    init() {
        const $el = this.el; 
        $el.addEventListener(`click`, handleClickJump);
      }
});

const handleClickJump = () => {
    const fallingObjects = [...document.querySelectorAll(`.falling-object`)];

    fallingObjects.forEach(obj => obj.setAttribute(`template`, `src: #walkFrontAnimation`));
    setTimeout(() => {
        fallingObjects.forEach(obj => obj.setAttribute(`template`, `src: #walkLeftAnimation`));
        setTimeout(() => {
            fallingObjects.forEach(obj => obj.setAttribute(`template`, `src: #jumpAnimation`));
        }, 2000)
    }, 5000)
    
};