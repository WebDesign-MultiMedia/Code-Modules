const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const intitalPlants = 20;
const spacePerPlant = 0.8;
const maxCapacity = area / spacePerPlant;
// PC means plantCount
const eightyPercent = (PC) => PC > maxCapacity * spacePerPlant;
const fifthyToEighty = (PC) => PC => maxCapacity * 0.8;

export default function plantGrowthControl(weeks){
 const plantCount = intitalPlants * Math.pow(2, weeks);

 if(eightyPercent(plantCount)){
  console.log(`week ${weeks}: Prune the plants. Too many plants!`);
 } else if(fifthyToEighty(plantCount)) {
  console.log(`week ${weeks}: Monitor the plants. They are growing within acceptable limits`);
 } else{
  console.log("week ${weeks}: Plant more. There is room for more plants." );
 }
}

plantGrowthControl(1);
plantGrowthControl(2);
plantGrowthControl(3);