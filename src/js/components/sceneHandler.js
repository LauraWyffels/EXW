AFRAME.registerComponent(`scenehandler`, {
  init() {
    this.el.addEventListener(`click`, () => {
      if (window.location = `index.html`) {
        window.location = `pages/disarmBomb.html`;
      }

      if (window.location = `disarmBomb.html`) {
        window.location = `flyPlane.html`;
      }

    });
  }
});