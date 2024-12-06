/* Factorial of numbers */

function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
factorial(5);
console.log(factorial(5));



/* Prime number */

function isPrime(num) {
  let i, result = true;
  for (i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
          result = false;
          break;
      }
  }
  if (result == true)
      console.log(num + " is prime");
  else
      console.log(num + " is not prime");
}
console.log(isPrime(7));
console.log(isPrime(10));


/* Fibanachi */

function fibanachi(num){
  const arrfb = [0, 1];
  let x, y;

  for(let i = 2; i < num; i++){
    x = arrfb[i - 1];
    y = arrfb[i - 2];
    arrfb.push(x + y);
  } return arrfb;
};
console.log(fibanachi(5));

console.log(fibanachi(10));


