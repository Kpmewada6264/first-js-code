let mydate=new Date()
console.log(mydate);

console.log(mydate.toString());

console.log(mydate.toDateString());

console.log(mydate.toLocaleString());

console.log(typeof mydate);

let mycreatedate=new Date(2023, 9, 1);

console.log(mycreatedate);
console.log(mycreatedate.toDateString());

console.log(mycreatedate.toLocaleString());

let mycreatedate2=new Date("2023-10-01");

console.log(mycreatedate2.toLocaleString());

let timestamp=Date.now();
console.log(timestamp);
console.log(mycreatedate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate=new Date()

console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getYear());

console.log(newdate.toLocaleString('default', { weekday: 'long', timeZone: 'UTC' }));
console.log(newdate.toLocaleString('default', { month: 'long', timeZone: 'UTC' }));