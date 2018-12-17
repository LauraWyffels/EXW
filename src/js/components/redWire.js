AFRAME.registerComponent(`redwire`, {
    schema: {
        visible: { default: `false` }
    },
    init() {
        const data = this.data;
        const $button = document.querySelector(`.redWireButton`);


        $button.addEventListener(`click`, () => {
            const $bomb = document.querySelector(`.bomb`);
            $bomb.setAttribute(`visible`, data.visible);

            const fallingObjects = [...document.querySelectorAll(`.falling-object`)];
            fallingObjects.forEach(obj => obj.setAttribute(`template`, `src: #sitInCockPitAnimation`));
        });
    }
});
