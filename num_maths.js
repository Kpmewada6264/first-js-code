const score =400

console.log(score);



const balance=new  Number(100)

console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); 

// Number methods and properties

console.log(Number.isInteger(balance));

console.log(Number.isNaN(balance));

console.log(Number.isFinite(balance));

console.log(Number.parseFloat("3.14"));

console.log(Number.parseInt("3.14"));
 
console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.EPSILON);

const otherBalance = 200.56789;

console.log(otherBalance.toPrecision(2)); 

const hundreds=100000

console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }));

//************************Maths******************************* 
console.log(Math);

console.log(Math.PI);

console.log(Math.abs(-5)); // Absolute value


console.log(Math.round(4.2)); // Round off
console.log(Math.ceil(4.2)); // Round up
console.log(Math.floor(4.8)); // Round down
console.log(Math.min(1, 2, 3, -1, 5)); // Minimum value

console.log(Math.max(1, 2, 3, -1, 5)); // Maximum value

console.log(Math.random()); // Random number between 0 and 


console.log(Math.random() * 10); // Random number between 0 and 10

const min =10
const max =20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);// Random number between min and max

console.log(Math.sqrt(16)); // Square root

console.log(Math.pow(2, 3)); // Power (2^3)

