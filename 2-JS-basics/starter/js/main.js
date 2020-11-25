/************************
* Variables and data types
*/
/*
var firstName = 'Daniel';
console.log(firstName);

var lastName = 'Hawes'
var age = 20;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job)

job = 'Web-developer';
console.log(job)

// Var naming rules
var _3years = 3;
var johnMark = 'john and mark'
var if = 23;
*/


/************************
 * Variable mutation and type coercion
 */
/*
 var firstName = 'Daniel';
 var age = 20;

 // Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;

 job = 'Web-developer';
 isMarried = 'false';

 console.log(firstName + ' is a ' + age + ' years old ' + job + '. is he married? ' + isMarried);


 // Variable mutation
 age = 'Twenty';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' years old ' + job + '. is he married? ' + isMarried);

 var lastName =  prompt('What is his last Name?');
 console.log(firstName + ' ' + lastName);
 */


/*****************************
 * Basic operators
 */

/*
var year, yearDaniel, yearKayla;
now = 2020; 
ageDaniel = 20;
ageKayla = 21

//Math operators
yearDaniel = now - ageDaniel;
yearKayla = now - ageKayla;

console.log(yearDaniel);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators

var danielOlder = ageDaniel < ageKayla;
console.log(danielOlder);   

// type of operator

console.log(typeof danielOlder);
console.log(typeof ageDaniel);
console.log(typeof 'Kayla is older than Daniel');
var x;
console.log(typeof x);
*/


/***********************************
 * Operator precedence
 */
/*
 var now = 2020;
 var yearDaniel = 2000;
 var fullAge = 18;

 // multiple operators
 var isFullAge = now - yearDaniel >= fullAge; //true
 console.log(isFullAge);
 
//grouping
 var ageDaniel = now - yearDaniel;
 var ageKayla = 21;
 var average = (ageDaniel + ageKayla) / 2;
 console.log(average);

 //multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6;// 8 * 4 - 6 // 32 - 6 // 26
 console.log(x , y);

 // more operators
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
//  x++;
 x--;
 console.log(x);
*/



/************************************
 * Coding Challenge 1
 */

/*
 Mark and jphn are trying to compare their BMI( body mass Index), which is calculated usubg the formula:
 BMI=Mass / height^2 = mass / (height * height). 
 (mass in Kg and height in meter).

 1. store Marks and john mass and height in variables
 2. Calculate both their BMIs
 3. Create a boolean variable containing information about whether mark has a higher BMI than john.
 4 Print a string to the console containing the variable from step3. (something like "is mark BMI higher than johns? true".

 */

/*
 var massMark = 80;//Kg
 var heightMark = 2.0;//meters

 var massJohn = 50; //kg
 var heightJohn = 1.5;//meters
 
 
 var markBmi = massMark / (heightMark * heightMark) ;
 var johnBmi = massJohn / (heightJohn * heightJohn);
 console.log(markBmi, johnBmi);

 var markHigher = markBmi > johnBmi;
 console.log( ' Is mark\'s BMi higher than john\'s ?' + markHigher);
 */


/**********************************
 * If / else statements
 */
/*
 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
   console.log(firstName + ' is married');
 } else {
   console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried = true;
 if (isMarried) {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 80;//Kg
var heightMark = 2.0;//meters

var massJohn = 50; //kg
var heightJohn = 1.5;//meters

var markBmi = massMark / (heightMark * heightMark) ;
var johnBmi = massJohn / (heightJohn * heightJohn);

if( markBmi > johnBmi) {
  console.log( ' Mark\'s BMi is higher than john\'s. ');
}else{
  console.log( ' John\'s BMi is higher than Marks\'s. ');
}

*/
/*********************************
 * Boolean logic
 */
/*
 var firstName = 'john'
 var age = '20';

 if(age < 13) {
   console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) { //between 13 and 20 === >= 13 And age <20
  console.log(firstName + ' is a teenager.');
 } else if ( age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
 }
  else{
  console.log(firstName + ' is a man');
 }
 */

/**********************************
 * The ternary operator and swithc statements
 */
/*
var firstName = 'john';
var age = '15';
//ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

// if ( age >= 18) {
//   var drink = 'beer';
// } else {
//   var drink = 'water';
// }

// Switch statement
var job = 'designer';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in South Africa');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites');
    break;
  default:
    console.log(firstName + ' does something else');
}

age = '50';
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man');  
}
*/

/**************************************
 * Truthy and falsy values and equality operators
 */

 /*
 falsy values: underfine, null, zero, empty strings and not a no.
truthy values: not falsy values

var height;

height = 23;

if(height || height === 0){
  console.log('Variable is defined');
}else{
  console.log('Variable has not been defined');
}

// Equality operators
if (height === '23'){
  console.log('The == operator does type coercion');
}
*/

/***********************************
 * Coding challenge 2
 */

/*
John and mike both play basketball in different teams. In the latest 3 games, johns team scored 89, 128 and 103 points, while mikes team scored 116, 94 and 123 points.

1. calculate the average score for each team
2. decide which teams wins in average(heighest average score), and print the winner in the console. also include the everage score in the output.
3. then change the scores to show different winners. dont forget to take into account there might be a draw(the same average score)

4. Extra: MAry also plays basketball , and her team scored 997, 134 and 105. likje before, log the average winner to the console, HINT: you will need the && operator to take the decision. If you cant solve this one, just watch the solution, its no problem.
5. like before, change the scores to generate different winners, keeping in mind there might be draws
*/
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary );

if ( scoreJohn > scoreMike && scoreJohn > scoreMary){
  console.log('John\'s team wins with ' + scoreJohn + ' points.')
} else if (scoreMike > scoreJohn && scoreMike > scoreMary){
  console.log('Mike\s team wins with ' + scoreMike + ' points.')
}else if (scoreMary > scoreJohn && scoreMary > scoreMike){
  console.log('Mary\s team wins with ' + scoreMary + ' points.')
}else{
  console.log('All teams has the same score which is a draw')
}*/


/*
if (scoreJohn > scoreMike) {
  console.log('John\'s team wins with ' + scoreJohn + ' points.')
} else if (scoreJohn < scoreMike ){
  console.log('Mike\s team wins with ' + scoreMike + ' points.') 
} else {
  console.log('John and Mike and Maryhas the same score')
}*/




/*******************************
 * Functions
 */
/*
function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageKayla = calculateAge(1999);
var ageDaniel = calculateAge(1943);

console.log (ageJohn, ageKayla, ageDaniel)


function yearsUntilRetirement(year, firstName){
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0){
    console.log(firstName + ' retires in ' + retirement + ' years');
  }else {
    console.log(firstName + ' is already retired.')
  }
  
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1999, 'Kayla');
yearsUntilRetirement(1943, 'Daniel');
*/
/************************
 * Function statements and expressions
 */
//function declaration
// function whatDoYouDo(job, firstName){}
/*
//That is a function expression
 var whatDoYouDo = function(job, firstName){
   switch(job){
     case 'teacher':
       return firstName + ' teaches kids how to code.';
     case 'driver':
       return firstName + ' drives a uber in capetown.';
     case 'designer':
       return firstName + ' designs websites.';
     default:
       return firstName + ' does something else.';
   }
 }

 console.log(whatDoYouDo('teacher', 'john'));
 console.log(whatDoYouDo('drives', 'Mark'));
 console.log(whatDoYouDo('retired', 'Luke'));
*/

/***********************************************
 * Arrays
 */
/*
 // Initialize new array
var names = ['John', 'Mark','Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
// names[names.length] = 'kay';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift()
console.log(john);

// john.indexOf(1990);
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner)
*/

/****************************************
 * Coding Challenge 3
 */

 /*
 John and his family went on a holiday and went to 3 different restuarants. the bills were $124, $48 and $268.

 to tip the waiter a fair amount, john created a simple tip calculator (as a function). he likes to tip 20% off the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200

 in the end, john would like to have 2 arrays:
 1. Containing all 3 tips (one of each bill)
 2. Containing all 3 final paid amounts (bill + tip).

 (Note: to calculate 20% of a value, simply multiply if with 20/100 = 0.2)

 */

 /*
 function tipCalculator(bill){
   var percentage;
   if (bill < 50){
     percentage = 0.2;
   }else if (bill >= 50 && bill < 200){
     percentage = 0.15;
   }else {
     percentage = 0.1;
   }
   return percentage * bill;
 }
// 124 48 268
var bills = [124, 48, 268]
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])]
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(finalValues);
*/

/*******************************************************
 * Objects and Properties
 */
/*
 //object literal
 var john = {
   firstName: 'John',
   lastName: 'Smith',
   birthYear: '1990',
   family: ['Jane', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMarried: false
 };
 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'isMarried';
 console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john)

 // new object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/************************************
 * objects and methods
 */

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: '1990',
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   }
// };

// john.calcAge();
// console.log(john);


/******************************************
 * coding challenge 4
 */

 /* lets remember the first coding challenge where mark and john compared their BMIs. lets now implement the same functionality with objects and methods.

 1. for each of themm, create and object with properties for their full name, mass and height.

 2. then add a method to each object to calculate the BMI. save the BMI to the object and also return it from the method

 3.In the end , log to the console who has the highest BMI, together with fullnames and thee respective BMI. Dont forgt they might have the same BMI

 remember BMI = mass / height^2 = mass / (height * height)
 */

 /*
 var mark = {
   fullName: 'Mark Henry',
   mass: 60,
   height: 1.5,
   calcBmi: function() {
     this.bmi = this.mass / (this.height * 2);
     return this.bmi;
   } 
 }
 
 var john = {
  fullName: 'John Daniels',
  mass: 80,
  height: 2.5, 
  calcBmi: function() {
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
  } 
}


 if (mark.calcBmi() > john.calcBmi()) {
   console.log(mark.fullName + ' BMI is higher with ' + mark.bmi )
 } else if  (john.bmi > mark.bmi) {
   console.log( john.fullName + ' BMI is higher with ' + john.bmi)
 } else {
   console.log('They both have equal BMis')
 }
*/

/***************************************
 * loops and iteration
 */

//  console.log(1);
//  console.log(2);
//  console.log(3);

// for loop

// for (var i = 0;i < 10; i++){
//   console.log(i);
// }
for (var i = 1;i <= 20; i += 2){
  console.log(i);
}

// i = 0, 0 < 10 is true, lof i to console, 1++
// i = 1, 1 < 10 is true log i to console, 1++
//....
// i = 9, 9 < 10 is true log i to console, 1++
// i = 10, 10 < 10 is False ,exit the loop

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
  console.log(john[i]);
}

// while loop
var i = 0;
while(i < john.length){
  console.log(john[i]);
  i++;
}

//continue and break statements






























































































































