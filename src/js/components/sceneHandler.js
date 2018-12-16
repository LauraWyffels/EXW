AFRAME.registerComponent(`scenehandler`, {
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
    });
    $getOut.addEventListener(`click`, () => {
      $popUp.setAttribute(`visible`, data.visible);
    });

    // popupText2

    const $popUp2 = document.getElementById(`popupText2`);
    const $redWire = document.getElementById(`redWire`);
    const $blueWire = document.getElementById(`blueWire`);

    $redWire.addEventListener(`click`, () => {
      $popUp2.setAttribute(`visible`, data.visible);
    });
    $blueWire.addEventListener(`click`, () => {
      $popUp2.setAttribute(`visible`, data.visible);
    });

  }
});