AFRAME.registerComponent(`scenehandler`, {
  init() {
    this.el.addEventListener(`click`, () => {
      window.location = `index2.html`;
      // if (!playing) {
      //     scene.play();
      // } else {
      //     scene.pause();
      //     scene.currentTime = 0;
      // }
      // playing = !playing;
    });
  }
});