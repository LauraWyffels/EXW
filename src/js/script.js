{

  const handlePopup = () => {
    const $popup1 = document.getElementById(`popupText1`);
    setInterval(() => {


    }, 10000);
  }

  const handleLoadingScreen = () => {
    const $loader = document.querySelector(`.loader`);
    setTimeout(() => {
      $loader.parentElement.removeChild($loader);
    }, 10000);
  };

  const init = () => {
    if (document.querySelector(`.loader`)) {
      handleLoadingScreen();
    }
    handlePopup();
  };

  init();
}