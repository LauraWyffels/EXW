AFRAME.registerComponent(`audiohandler`, {
  schema: {
    soundName: {default: `bombSound`}
  },
  init() {
    let playing = false;
    const data = this.data;
    const $audio = document.getElementById(`${data.soundName}`);

    this.el.addEventListener(`click`, () => {
      if (!playing) {
        $audio.play();
      } else {
        $audio.pause();
        $audio.currentTime = 0;
      }
      playing = !playing;
    });
  }
});