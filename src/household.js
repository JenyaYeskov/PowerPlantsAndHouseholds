let PowerPlant = require("./powerPlant");

class Household {
    constructor() {
        this.powerPlants = [];
        this.houseHolds = [];
    }

    connectPowerPlant(powerPlant) {

        if (powerPlant instanceof PowerPlant) {

            if (this.powerPlants.includes(powerPlant)) {
                console.log("This power plant is already connected");
            } else {
                this.powerPlants.push(powerPlant);
                console.log("Power plant connected");
            }
        } else {
            console.log("Something is wrong");
        }
    }

    connectHousehold(household) {
        if (household instanceof Household) {

            if (this.houseHolds.includes(household)) {
                console.log("This household is already connected");
            } else {
                this.houseHolds.push(household);
                household.houseHolds.push(this);
                console.log("Household connected");
            }

        } else {
            console.log("Something is wrong");
        }
    }

    disconnectPowerPlant(powerPlant) {
        if (powerPlant instanceof PowerPlant) {

            if (this.powerPlants.includes(powerPlant)) {
                this.powerPlants.splice(this.powerPlants.indexOf(powerPlant), 1);
                console.log("Power plant disconnected");
            } else {
                console.log("This power plant was not connected to this household");
            }

        } else {
            console.log("Something is wrong");
        }
    }

    isElectrified(houseHoldsCheckedForPowerPlants) {
        let electrified = false;

        if (!houseHoldsCheckedForPowerPlants) {
            houseHoldsCheckedForPowerPlants = [];
        }

        if (this.powerPlants.length) {
            for (let powerPlant of this.powerPlants) {
                if (!electrified && powerPlant.isAlive()) {
                    electrified = true;
                }
            }
        }

        houseHoldsCheckedForPowerPlants.push(this);

        if (!electrified && this.houseHolds.length) {

            for (let houseHold of this.houseHolds) {
                if (!electrified && !houseHoldsCheckedForPowerPlants.includes(houseHold)) {
                    if (houseHold.isElectrified(houseHoldsCheckedForPowerPlants)) {
                        electrified = true;
                    }
                }
            }
        }

        return electrified;
    }
}

module.exports = Household;