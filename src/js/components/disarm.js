AFRAME.registerComponent(`disarm`, {
  init() {
    this.el.addEventListener(`click`, () => {
      if (window.location = `disarmBomb.html`) {
        const $bomb = document.querySelector(`.bomb`);
        $bomb.setAttribute(`visible`, `false`);
      }

    });


  }
});