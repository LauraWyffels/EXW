
class Clock {
    constructor() {
        const createClock = (endtime) => {
            const t = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor((t / 1000) % 60);
            const minutes = Math.floor((t / 1000 / 60) % 60);

            return {
                'total': t,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        const initializeClock = (id, endtime) => {
            const clock = document.getElementById(id);

            const minutesSpan = clock.querySelector('.minutes');
            const secondsSpan = clock.querySelector('.seconds');

            const updateClock = () => {
                const t = createClock(endtime);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }

            updateClock();
            const timeinterval = setInterval(updateClock, 1000);
        }

        const deadline = new Date(Date.parse(new Date()) + 2 * 60 * 1000);
        initializeClock('clockdiv', deadline);

    }

};
export default Clock;