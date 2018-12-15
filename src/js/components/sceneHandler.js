AFRAME.registerComponent('scenehandler', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location = "index2.html";
            // if (!playing) {
            //     scene.play();
            // } else {
            //     scene.pause();
            //     scene.currentTime = 0;
            // }
            // playing = !playing;
        });
    }
})