//increment by 10
console.log('increment by 10')
for (let i = 5; i < 120; i+=10) {
   console.log(i);
}

//decrement by division
console.log('decrement by division')
for (let i = 4096;; i/=2) {
	console.log(i)
	if (i === 1) {break};
}

//array of US presidents
const presArray = [
"George Washington",
"John Adams",
"Thomas Jefferson",
"James Madison",
"James Monroe",
"John Quincy Adams",
"Andrew Jackson",
"Martin Van Buren",
"William Henry Harrison",
"John Tyler",
"James Knox Polk",
"Zachary Taylor",
"Millard Fillmore",
"Franklin Pierce",
"James Buchanan",
"Abraham Lincoln",
"Andrew Johnson",
"Ulysses S. Grant",
"Rutherford Birchard Hayes",
"James Abram Garfield",
"Chester Alan Arthur",
"Grover Cleveland",
"Benjamin Harrison",
"Grover Cleveland",
"William McKinley",
"Theodore Roosevelt",
"William Howard Taft",
"Woodrow Wilson",
"Warren Gamaliel Harding",
"Calvin Coolidge",
"Herbert Clark Hoover",
"Franklin Delano Roosevelt",
"Harry S. Truman",
"Dwight David Eisenhower",
"John Fitzgerald Kennedy",
"Lyndon Baines Johnson",
"Richard Milhous Nixon",
"Gerald Rudolph Ford",
"James Earl Carter, Jr.",
"Ronald Wilson Reagan",
"George Herbert Walker Bush",
"William Jefferson Clinton",
"George Walker Bush",
"Barack Hussein Obama",
"Donald Jackass Trump"
];

//loop over presidential array with for loop
console.log('US Presidents')
// for (let i =  0; i  < presArray.length; i++) {
// 	console.log(i+1 + " " + presArray[i]);
// }

// loop over presArray with forEach
let presCounter = 1
presArray.forEach((each) => {
  console.log(presCounter + '. ' + each)
  presCounter++
})

//object iteration
const antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

// for in loop over antSpecies
console.log('ant species')
for (let prop in antSpecies) {
  console.log(prop);
}
