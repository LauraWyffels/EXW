AFRAME.registerComponent(`scenehandler`, {
  init() {
    this.el.addEventListener(`click`, () => {
      if (window.location = `pages/index.html`) {
        window.location = `pages/disarmBomb.html`;
      }
    });
  }
});