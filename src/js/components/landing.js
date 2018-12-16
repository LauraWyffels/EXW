AFRAME.registerComponent(`landing`, {
    init() {
        const $el = this.el;
        $el.addEventListener(`click`, handleClickLanding);
    }
});

const handleClickLanding = () => {
    const planeParts = [...document.querySelectorAll(`.plane-part`)];
    const sky = document.querySelector(`.sky`);
    const bomb = document.querySelector(`.bomb`);

    [...planeParts, sky, bomb].forEach(part => {
        part.setAttribute(`template`, `src: #landAnimation`);
    });
};

