AFRAME.registerComponent(`findbomb`, {
    init() {
        const $el = this.el; 
        $el.addEventListener(`click`, handleClickDisarm);
    }
});

const handleClickDisarm = () => {
    const fallingObjects = [...document.querySelectorAll(`.falling-object`)];
    fallingObjects.forEach(obj => obj.setAttribute(`template`, `src: #walkToCockPitAnimation`));
}
