
/* Reserve String */

/* Using split join */

let myName = "Desserts";

myName = myName.split('').reverse().join('');
console.log(myName);

/* Count String Character */

let xterNumber = myName.length;
console.log(xterNumber);


const capitaLise = function (sentence) {
  
  let mySent1 = sentence.split('');
  for(let i =0; i<mySent1.length; i++){
    mySent1[i] = mySent1[i][0].toUpperCase() + mySent1[i].substring(1);
        
  }
  return mySent1.join('');
}

console.log(capitaLise('my friend has travelled'));




