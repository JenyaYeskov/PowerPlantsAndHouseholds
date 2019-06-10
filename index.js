let World = require('./world');

let w = new World();
let pp = w.createPowerPlant();
w.killPowerPlant(pp);
let pp2 = w.createPowerPlant();
let hh1 = w.createHousehold();
let hh2 = w.createHousehold();
let hh3 = w.createHousehold();
let hh4 = w.createHousehold();
let hh5 = w.createHousehold();

w.connectHouseholdToPowerPlant(hh1, pp);

w.connectHouseholdToHousehold(hh1, hh2);
w.connectHouseholdToHousehold(hh1, hh4);
w.connectHouseholdToHousehold(hh2, hh3);
w.connectHouseholdToHousehold(hh1, hh2);
w.connectHouseholdToHousehold(hh5, hh4);

console.log(w.householdHasElectricity(hh3));
w.connectHouseholdToPowerPlant(hh5, pp2);
console.log(w.householdHasElectricity(hh3));
w.killPowerPlant(pp2);
console.log(w.householdHasElectricity(hh2));
w.repairPowerPlant(pp);
console.log(w.householdHasElectricity(hh3));
w.disconnectHouseholdFromPowerPlant(hh1, pp);
console.log(w.householdHasElectricity(hh3));
w.connectHouseholdToPowerPlant(hh5, pp);
console.log(w.householdHasElectricity(hh2));




// // console.log(hh.powerPlants.empty())
// w.connectHouseholdToPowerP;lant(hh, pp);
// // console.log(hh.powerPlants.empty())
// w.connectHouseholdToPowerPlant(hh, pp2);
// hh.connectPowerPlant(pp);
//
// pp.nm = 1;
// pp2.nm = 2;
// // w.disconnectHouseholdFromPowerPlant(hh,pp)
// w.disconnectHouseholdFromPowerPlant(hh, pp2);
// w.disconnectHouseholdFromPowerPlant(hh, pp2);
//
// w.connectHouseholdToHousehold(hh, hh2);
// w.connectHouseholdToHousehold(hh, hh2);

// let j = [];
// console.log(j.length)
// j.push(1123)
// console.log(j.length)
// j.pop()
// console.log(j.length)
//
// if (3) {
//     console.log('qwe')
// }else console.log('asd')
// console.log(pp.alive);
// w.killPowerPlant(pp);
// console.log(pp.alive);
// w.repairPowerPlant(pp);
// console.log(pp.alive);
