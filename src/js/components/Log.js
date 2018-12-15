// Logging something:
AFRAME.registerComponent(`log`, {
  schema: {type: `string`},

  init() {
    const stringToLog = this.data;
    console.log(stringToLog);
  }
});