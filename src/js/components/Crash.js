AFRAME.registerComponent(`crash`, {
    schema: {
        timer: {default: 10000}
    },
    init() {
        const data = this.data;
        const el = this.el;  // = box or sphere or...
        setTimeout( () => {
            el.setAttribute(`position`, `0 -1000 0`);
        }, data.timer);
    }
});