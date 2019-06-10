let World = require('./world');

let world = new World();
let pp = world.createPowerPlant();
let pp2 = world.createPowerPlant();
let hh1 = world.createHousehold();
let hh2 = world.createHousehold();
let hh3 = world.createHousehold();
let hh4 = world.createHousehold();
let hh5 = world.createHousehold();

world.killPowerPlant(pp);
world.connectHouseholdToPowerPlant(hh1, pp);

world.connectHouseholdToHousehold(hh1, hh2);
world.connectHouseholdToHousehold(hh1, hh4);
world.connectHouseholdToHousehold(hh2, hh3);
world.connectHouseholdToHousehold(hh1, hh2);
world.connectHouseholdToHousehold(hh5, hh4);

console.log(world.householdHasElectricity(hh3));
world.connectHouseholdToPowerPlant(hh5, pp2);
console.log(world.householdHasElectricity(hh3));

world.killPowerPlant(pp2);
console.log(world.householdHasElectricity(hh2));

world.repairPowerPlant(pp);
console.log(world.householdHasElectricity(hh3));

world.disconnectHouseholdFromPowerPlant(hh1, pp);
console.log(world.householdHasElectricity(hh3));

world.connectHouseholdToPowerPlant(hh5, pp);
console.log(world.householdHasElectricity(hh2));
