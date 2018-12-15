// Gazing controlls
AFRAME.registerComponent(`change-color-on-hover`, {
  schema: {
    color: {default: `red`}
  },
  init() {
    const data = this.data;
    const el = this.el;  // = box or sphere or...
    const defaultColor = el.getAttribute(`material`).color;

    el.addEventListener(`mouseenter`, () => {
      el.setAttribute(`color`, data.color);
    });

    el.addEventListener(`mouseleave`, () => {
      el.setAttribute(`color`, defaultColor);
    });
  }
});

