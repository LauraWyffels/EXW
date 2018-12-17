AFRAME.registerComponent(`redwire`, {
    schema: {
        visible: { default: `false` }
    },
    init() {
        const data = this.data;
        const $button = document.querySelector(`.redWireButton`);
        const $bomb = document.querySelector(`.bomb`);

        $button.addEventListener(`click`, () => {
            const planeParts = [...document.querySelectorAll(`.plane-part`)];
            const bomb = document.querySelector(`.bomb`);
            $bomb.setAttribute(`visible`, data.visible);

            [...planeParts, bomb].forEach(part => {
                part.setAttribute(`template`, `src: #sitInCockPitAnimation`);
            });
        });
    }
});
