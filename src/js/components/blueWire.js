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
        });


    }
});