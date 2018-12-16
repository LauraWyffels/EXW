AFRAME.registerComponent(`bomb`, {
  schema: {
    visible: { default: `false` }
  },
  init() {
    const data = this.data;
    const $popUp2 = document.getElementById(`popupText2`);
    const $bomb = document.querySelector(`.bomb`);

    $bomb.addEventListener(`click`, () => {
      $popUp2.setAttribute(`visible`, data.visible);
    });


  }
});