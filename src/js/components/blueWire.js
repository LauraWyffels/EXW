AFRAME.registerComponent(`bluewire`, {
    schema: {
        visible: { default: `false` }
    },
    init() {
        const data = this.data;
        const $button = document.querySelector(`.blueWireButton`);
        const $audio = document.getElementById(`bombSound`);
        const $plane = document.querySelector(`.airplane`);
        const $sky = document.querySelector(`.sky`);

        $button.addEventListener(`click`, () => {
            $audio.play();
            $plane.setAttribute(`visible`, data.visible);
            $sky.setAttribute(`visible`, data.visible);
            const fallingObjects = [...document.querySelectorAll(`.falling-object`)];

            fallingObjects.forEach(obj => obj.setAttribute(`template`, `src: #jumpAnimation`));

            // const $audio2 = document.getElementById(`aaaah`);
            // $audio2.play();

        });


    }
});