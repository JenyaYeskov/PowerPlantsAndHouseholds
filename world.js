let PowerPlant = require("./powerPlant");
let Household = require("./household");

class World {
    constructor() {
    }

    createPowerPlant() {
        try {
            return new PowerPlant();
        } catch (e) {
            console.error(e);
        }
    }

    createHousehold() {
        try {
            return new Household();
        } catch (e) {
            console.error(e);
        }
    }

    connectHouseholdToPowerPlant(household, powerPlant) {
        try {
            household.connectPowerPlant(powerPlant);
        } catch (e) {
            console.error(e);
        }
    }

    connectHouseholdToHousehold(household1, household2) {
        try {
            household1.connectHousehold(household2);
        } catch (e) {
            console.error(e);
        }
    }

    disconnectHouseholdFromPowerPlant(household, powerPlant) {
        try {
            household.disconnectPowerPlant(powerPlant);
        } catch (e) {
            console.error(e);
        }
    }

    killPowerPlant(powerPlant) {
        try {
            powerPlant.die();
        } catch (e) {
            console.error(e);
        }
    }

    repairPowerPlant(powerPlant) {
        try {
            powerPlant.recover();
        } catch (e) {
            console.error(e);
        }
    }

    householdHasElectricity(household) {
        try {
            return household.isElectrified();
        } catch (e) {
            console.error(e);

        }
    }
}

module.exports = World;

// let w = new World();
// let pp = w.createPowerPlant();
// w.killPowerPlant(pp);
// let pp2 = w.createPowerPlant();
// let hh1 = w.createHousehold();
// let hh2 = w.createHousehold();
// let hh3 = w.createHousehold();
// let hh4 = w.createHousehold();
// let hh5 = w.createHousehold();
//
// let h = new Household();
// console.log(h.isElectrified());