// Logging something:
AFRAME.registerComponent(`log`, {
  schema: {type: `string`},

  init() {
    const stringToLog = this.data;
    const $el = this.el;  // = box or sphere or...
    
    $el.addEventListener(`loaded`, () => {
      console.log(stringToLog);
    });
  }
});