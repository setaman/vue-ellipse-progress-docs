export default class {
    constructor(task = () => {}, time = 1000) {
        this.task = task;
        this.time = time;
        this.interval = null;
    }
    run() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(this.task, this.time);
    }
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}
