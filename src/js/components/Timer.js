let gameOver = false;

AFRAME.registerComponent(`timer`, {
    init() {
        const randomAmountOfMinutes = Math.floor(Math.random() * (3 - 1)) + 1;
        const counter = document.querySelector(`.timer`);

        let resterendeTijd = (randomAmountOfMinutes * 60);


        setInterval(() => {
            resterendeTijd -= 1;
            const m = Math.floor(resterendeTijd / 60);
            const s = Math.floor(resterendeTijd % 60);
            counter.setAttribute(`value`, `${m < 10 ? `0` : ``}${m.toString()}:${s < 10 ? `0` : ``}${s.toString()}`);

            if(resterendeTijd == 0) {
                gameOver = true;
                clearInterval();
                counter.setAttribute(`value`, `00:00`);
                counter.setAttribute(`template`, `src: #blink`);
                counter.parentNode.setAttribute(`position`, `3000 3000 3000`);
                
                // crash plane
                const planeParts = [...document.querySelectorAll(`.plane-part`)];
                const sky = document.querySelector(`.sky`);
                const bomb = document.querySelector(`.bomb`);

                [...planeParts, sky, bomb].forEach(part => {
                    part.setAttribute(`template`, `src: #crashAnimation`);
                });

                // remove all pop-ups
                [...document.querySelectorAll(`.popup-text`)].forEach(popup => popup.setAttribute(`visible`, `false`));   
            }
        }, 1000);
    },
    tick() {
        if (gameOver) {
            const $audio = document.getElementById(`bombSound`);
            $audio.play();
            const $audio2 = document.getElementById(`crashSound`);
            $audio2.play();
            gameOver = false;
        }
    }
});