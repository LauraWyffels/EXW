{
    // HTML Objects
    const arrowFront = document.querySelector(`.arrowFront`);
    const airplane = document.querySelector(`.airplane`);
    const camera = document.querySelector(`.camera`);

    // Global variables
    let timer;

    const moveCameraToFront = () => {

    }

    const handleClickArrow = () => {
        console.log(`You clicked the arrow!`);
        // arrowFront.emit(`moveCameraToFront`);
    };

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    const setTimer = () => {
        timer = getRandomInt(5, 15);
        // timer *= (1000*60);
        timer *= 1000;

        console.log(timer);
        const interval = setInterval(() => {
            timer -= 1000;
            console.log(timer);
            if(timer <= 0) {
                clearInterval(interval);
                console.log(`BOEM`);
            }
        }, 1000);
    };

    const init = () => {
        arrowFront.addEventListener(`click`, handleClickArrow); 
        setTimer();
    }

    init();
}