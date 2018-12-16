AFRAME.registerComponent(`timer`, {
    init() {
        const randomAmountOfMinutes = Math.floor(Math.random() * (6 - 3)) + 3;
        const counter = document.querySelector(`.timer`);

        let resterendeTijd = (randomAmountOfMinutes * 60);

        setInterval( () => {
            resterendeTijd -= 1;
            const m = Math.floor(resterendeTijd / 60);
            const s = Math.floor(resterendeTijd % 60);
            counter.setAttribute(`value`, `${m < 10 ? `0` : ``}${m.toString()}:${s < 10 ? `0` : ``}${s.toString()}`);

            if(resterendeTijd <= 0) {
                clearInterval();
                counter.setAttribute(`value`, `00:00`);
                counter.setAttribute(`template`, `src: #blink`);

                // STOP GAME
            }
        }, 1000);   
    }
});