let assert = require('chai').assert;
let World = require('../src/world');

describe('tests', () => {

    let world;
    let household;
    let powerPlant;

    beforeEach(() => {
        world = new World();
        household = world.createHousehold();
        powerPlant = world.createPowerPlant();
    });

    it('should assert that household has no electricity by default', () => {

        assert.isFalse(world.householdHasElectricity(household));

    });

    it('should assert that household has electricity if connected to alive Power Plant', () => {

        world.connectHouseholdToPowerPlant(household, powerPlant);

        assert.isTrue(powerPlant.isAlive());
        assert.isTrue(world.householdHasElectricity(household));

    });

    it('should assert that household do not have Electricity after disconnecting from its only Power Plant',
        () => {

            world.connectHouseholdToPowerPlant(household, powerPlant);
            world.disconnectHouseholdFromPowerPlant(household, powerPlant);

            assert.equal(household.powerPlants.length, 0);
            assert.isFalse(world.householdHasElectricity(household));

        });

    it('should assert that household have Electricity as long as there\'s at least 1 alive Power Plant connected',
        () => {

            world.connectHouseholdToPowerPlant(household, powerPlant);

            assert.notEqual(household.powerPlants.length, 0);
            assert.isTrue(powerPlant.isAlive());
            assert.isTrue(world.householdHasElectricity(household));

        });

    it('should assert that household do not have Electricity if the only Power Plant dies', () => {

        world.connectHouseholdToPowerPlant(household, powerPlant);
        world.killPowerPlant(powerPlant);

        assert.equal(household.powerPlants.length, 1);
        assert.isFalse(powerPlant.isAlive());
        assert.isFalse(world.householdHasElectricity(household));

    });

    it('should assert that Power Plant can be repaired', () => {

        world.killPowerPlant(powerPlant);
        assert.isFalse(powerPlant.isAlive());

        world.repairPowerPlant(powerPlant);
        assert.isTrue(powerPlant.isAlive());

    });
});
