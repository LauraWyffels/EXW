AFRAME.registerComponent(`loading-screen`, {
  init() {
    const $el = this.el;  // = box or sphere or...
    setTimeout(() => {
      $el.parentElement.removeChild($el);
    }, 10000);
  }   
});
  