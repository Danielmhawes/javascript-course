// Function constructor

/*
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function(){
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 2000, 'designer');
var mark = new Person ('Jane', 1950, 'retired' );

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName); 
*/



/*

//object.create
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: {value: 1980},
    job: {value: 'designer'}
})
*/


/*
// primitives vs objects

//primitives
var a = 23;
var b = a;
a = 46;
console.log(a)
console.log(b);


//objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//function

var age = 20;
var obj = {
    name: 'Daniel',
    city: 'CapeTown'
};

function change(a, b) {
    a = 22;
    b.city = 'Durban'
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/


//////////////////////////////////
// lecture: passing functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}


function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages)
console.log(rates)
// console.log(fullAges)
*/



///////////////////////////////////////////////////////
//Functions returning functions
/*
 function interviewQuestion(job) {
     if (job === 'designer'){
         return function(name){
             console.log(name + ', can you please explain what UX design is?');
         }
     }else if (job === 'teacher') {
         return function (name) {
             console.log('What subject do you teacher,' + name + '?');
         }
     } else {
         return function(name) {
             console.log ('Hello ' + name + ', What do you do?')
         }
     }
 }

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var painterQuestion = interviewQuestion('painter')

teacherQuestion('Steven');
designerQuestion('Paul');
painterQuestion('Clive')
*/


//////////////////////////////////////////////////
//IIFE
/*
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);

})();
console.log(score);

(function( goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);

})(5);
*/

//////////////////////////////////
// closures
/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementSA = retirement(65);
var retirementUK = retirement(60);
retirementUS(1990);
retirementSA(2000);
retirementUK(1970);

// retirement(66)(1990);



 function interviewQuestion(job) {
     return function(name){
         if (job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        }else if (job === 'teacher'){
            console.log('What subject do you teach,' + name + '?');
        }else {
            console.log ('Hello ' + name + ', What do you do?')
        }
     }
 }

 interviewQuestion('teacher')('John')
 interviewQuestion('tech')('John')
*/

////////////////////////////////////////////////////
// bind, call and apply

//example
/*
var john = {
    name: 'john',
    age: 26,
    job: 'developer', 
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and gentlemen! I\'m '+ this.name + ' , I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if (style === 'friendly'){
            console.log('hey! What\'s up? I\'m '  + this.name +' , I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }

    }
}

var emily ={
    name: 'emily',
    age: 27,
    job: 'teacher',
}
john.presentation('formal' , 'afternoon');
john.presentation.call( emily, 'friendly' , 'Evening')
// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('Evening');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon      ')



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}


function isFullAge(limit , el) {
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));

console.log(ages);
console.log(fullJapan)
*/


function Question(question, answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion =
function() {
    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++) {
        console.log(i + ':' + this.answers[i] );
    }
}

Question.prototype.checkAnswer = function(ans){
    if (ans === this.correct){
        console.log('Correct answer!');
    } else {
        console.log('Wrong answer Try again :)')
    }
}
var q1 = new Question('Are you the owner of this Laptop?',
['Yes', 'No'],
1);

var q2 = new Question('Whats the real owner of this Laptop?', 
['John','Daniel','Ashton','Kayla'],
1);

var q3 = new Question ('Whats the color of my Hair?', 
['Green','Blue','Blonde'],
2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('please select the correct answer'));

questions[n].checkAnswer(answer);










