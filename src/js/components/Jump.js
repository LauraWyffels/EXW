AFRAME.registerComponent(`jump`, {
    schema: {
        visible: { default: `false` }
    },
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
            setTimeout(() => {
                const $audio = document.getElementById(`aaaah`);
                $audio.play();
            }, 1000);
        }, 2000)
    }, 5000)

};