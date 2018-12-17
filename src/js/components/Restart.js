AFRAME.registerComponent(`restart`, {
    init() {
        const $el = this.el;
        console.log($el);
        $el.addEventListener(`click`, () => {
            console.log(`lciee`);
            window.location = `../index.html`;
        });
    }
  });