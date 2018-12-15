{
  // HTML Objects
  const popup1 = document.getElementById(`popupText1`);

  // var explosionSound = document.getElementById("bomb");
  // entity.audio.sound.playSound();

  const init = () => {
    const $loader = document.querySelector(`.loader`);
    setTimeout(() => {
      $loader.parentElement.removeChild($loader);
    }, 10000);
  };

  init();
}