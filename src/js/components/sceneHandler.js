AFRAME.registerComponent(`scenehandler`, {
    init() {
        this.el.addEventListener(`click`, () => {
            if (window.location = `index.html`) {
                window.location = `disarmBomb.html`;
            }

        });
    }
});