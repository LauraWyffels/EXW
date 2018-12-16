AFRAME.registerComponent(`findbomb`, {
    init() {
        const $el = this.el;
        $el.addEventListener(`click`, handleClickFind);
    }
});

const handleClickFind = () => {
    const fallingObjects = [...document.querySelectorAll(`.falling-object`)];
    fallingObjects.forEach(obj => obj.setAttribute(`template`, `src: #walkToCockPitAnimation`));
}
