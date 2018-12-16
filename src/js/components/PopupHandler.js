AFRAME.registerComponent(`popuphandler`, {
    schema: {
      visible: {default: `false`}
    },
    init() {
      const data = this.data;
      const $el = this.el; // pop-up
  
      const $buttons = [...$el.querySelectorAll(`.popup-button`)];
      $buttons.forEach($button => {
        $button.addEventListener(`click`, () => $el.setAttribute(`visible`, data.visible));
      })
    }
  });
  