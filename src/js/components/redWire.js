AFRAME.registerComponent(`redwire`, {
    schema: {
        visible: { default: `false` }
    },
    init() {
        const data = this.data;
        const $button = document.querySelector(`.redWireButton`);
        const $bomb = document.querySelector(`.bomb`);

        $button.addEventListener(`click`, () => {
            // $bomb.setAttribute(`visible`, data.visible);

            // const fallingObjects = [...document.querySelectorAll(`.falling-object`)];
            // fallingObjects.forEach(obj => obj.setAttribute(`template`, `src: #sitInCockPitAnimation`));

            const planeParts = [...document.querySelectorAll(`.plane-part`)];
            const bomb = document.querySelector(`.bomb`);
            $bomb.setAttribute(`visible`, data.visible);

            [...planeParts, bomb].forEach(part => {
                part.setAttribute(`template`, `src: #sitInCockPitAnimation`);
            });
        });
    }
});
