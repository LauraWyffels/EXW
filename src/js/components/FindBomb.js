AFRAME.registerComponent(`findbomb`, {
    schema: {
        visible: { default: `false` }
    },
    init() {
        const data = this.data;

        // popupText1

        const $popUp = document.getElementById(`popupText1`);
        const $disarm = document.getElementById(`disarm`);
        const $getOut = document.getElementById(`getOut`);

        $disarm.addEventListener(`click`, () => {
            $popUp.setAttribute(`visible`, data.visible);
            handleClickDisarm();
        });
        $getOut.addEventListener(`click`, () => {
            $popUp.setAttribute(`visible`, data.visible);
            handleClickGetOut();
        });

    }
});

const handleClickDisarm = () => {
    const planeParts = [...document.querySelectorAll(`.plane-part`)];
    const cockpit = planeParts[0];
    const inside = planeParts[1];
    const bomb = document.querySelector(`.bomb`);

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

const handleClickGetOut = () => {
    const planeParts = [...document.querySelectorAll(`.plane-part`)];
    const cockpit = planeParts[0];
    const inside = planeParts[1];

    const cockPitAttributes = {
        duration: `5000`,
        position: `0 -5 5`,
        rotation: `0 0 0`
    };

    const insideAttributes = {
        duration: `5000`,
        position: `0 0 67`,
        rotation: `0 0 0`
    };


    setAttributes(cockpit, cockPitAttributes);
    setAttributes(inside, insideAttributes);

    [...planeParts].forEach(part => {
        part.setAttribute(`template`, `src: #walkAnimation`);
    });
};

