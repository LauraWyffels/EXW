AFRAME.registerComponent(`loading-screen`, {
  init() {
    const $el = this.el;  
    setTimeout(() => {
      $el.parentElement.removeChild($el);
    }, 15000);
  }   
});
  