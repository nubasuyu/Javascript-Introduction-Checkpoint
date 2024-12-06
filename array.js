/* Write functions to find the maximum and minimum values in an array of numbers */

let arr = [20, 12, 30, 18, 11, 83];

let arrMax = Math.max(...arr);
let arrMin = Math.min(...arr);

console.log(arrMax);
console.log(arrMin);

/* Create a function that calculates the sum of all elements in an array */

let arrb = [25, 36, 10, 15];
let sumArr = 0;

for (let i = 0; i < arrb.length; i++) {
    sumArr += arrb[i];
}
console.log(sumArr);

/* or */
let sumArrb = 0;
function add(arrList){
  
for (let i = 0; i < arrList.length; i++) {
  sumArrb += arrList[i];
}
return sumArrb

}

const arrM = [12, 20, 9, 16];
console.log(add(arrM));

/* Implement a function that filters out elements from an array based on a given condition */


// Example: Array of objects representing people
const people = [
  {
      name: "Alice",
      age: 25,
      profession: "Engineer"
  },
  {
      name: "Bob",
      age: 30,
      profession: "Designer"
  },
  {
      name: "Charlie",
      age: 35,
      profession: "Teacher"
  }
];

// Log the array of objects
console.log(people);

const youngPeople = [];

for(let y of people) {
  if(y.age < 35) {
    youngPeople.push(y);
  }
}
console.log(youngPeople);
