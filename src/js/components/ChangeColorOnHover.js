// Gazing controlls
AFRAME.registerComponent(`change-color-on-hover`, {
  schema: {
    color: { default: `red` }
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

// // Gazing controlls - opacity
// AFRAME.registerComponent(`change-color-on-hover`, {
//   schema: {
//     opacity: { default: `0.8` }
//   },
//   init() {
//     const data = this.data;
//     const el = this.el;  // = box or sphere or...
//     const defaultOpacity = el.getAttribute(`material`).opacity;

//     el.addEventListener(`mouseenter`, () => {
//       el.setAttribute(`opacity`, data.opacity);
//     });

//     el.addEventListener(`mouseleave`, () => {
//       el.setAttribute(`opacity`, defaultOpacity);
//     });
//   }
// });

