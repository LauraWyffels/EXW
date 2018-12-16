AFRAME.registerComponent(`bluewire`, {
    schema: {
        visible: { default: `false` }
    },
    init() {
        const $button = document.querySelector(`.blueWireButton`);
        const $audio = document.getElementById(`bombSound`);

        $button.addEventListener(`click`, () => {
            $audio.play();

            const planeParts = [...document.querySelectorAll(`.plane-part`)];
            const sky = document.querySelector(`.sky`);
            const bomb = document.querySelector(`.bomb`);

            // crash plane
            [...planeParts, sky, bomb].forEach(part => {
                part.setAttribute(`template`, `src: #crashAnimation`);
            });

            // sound 
            const $audio2 = document.getElementById(`crashSound`);
            $audio2.play();

            // remove all pop-ups
            [...document.querySelectorAll(`.popup-text`)].forEach(popup => popup.setAttribute(`visible`, `false`));
        });


    }
});