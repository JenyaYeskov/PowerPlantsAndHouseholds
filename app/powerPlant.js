class PowerPlant {
    constructor() {
        this.alive = true;
    }

    die() {
        this.alive = false;
        console.log('Power plant killed')
    }

    recover() {
        this.alive = true;
        console.log('Power plant recovered')
    }

    isAlive() {
        return this.alive;
    }
}

module.exports = PowerPlant;

