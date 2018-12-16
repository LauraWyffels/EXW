AFRAME.registerComponent(`disarmbomb`, {
    schema: {
        visible: { default: `false` },
        soundName: { default: `bombSound` }
    },
    init() {
        const data = this.data;
        let playing = false;
        const $audio = document.getElementById(`${data.soundName}`);

        // popupText2

        const $popUp2 = document.getElementById(`popupText2`);
        const $redWire = document.getElementById(`redWire`);
        const $blueWire = document.getElementById(`blueWire`);

        $redWire.addEventListener(`click`, () => {
            $popUp2.setAttribute(`visible`, data.visible);
            $audio.play();
            redWire();
        });

        $blueWire.addEventListener(`click`, () => {
            $popUp2.setAttribute(`visible`, data.visible);
            BlueWire();
        });

    }
});

const redWire = () => {
    //explosion
};

const blueWire = () => {
    const planeParts = [...document.querySelectorAll(`.plane-part`)];
    const cockpit = planeParts[0];
    const inside = planeParts[1];

    const cockPitAttributes = {
        duration: `5000`,
        position: `0 -5 11`,
        rotation: `0 0 0`
    };

    const insideAttributes = {
        duration: `5000`,
        position: `0 0 72`,
        rotation: `0 0 0`
    };

    const bombAttributes = {
        duration: `5000`,
        position: `0 0 3`,
        rotation: `0 0 0`
    };


    setAttributes(cockpit, cockPitAttributes);
    setAttributes(inside, insideAttributes);
    setAttributes(bomb, bombAttributes);

    [...planeParts, bomb].forEach(part => {
        part.setAttribute(`template`, `src: #walkAnimation`);
    });
};