//Mohammad AlDaboubi

// Function Constructor 

// var john = {
//     name: 'john',
//     year: 1995,
//     job: 'teacher',
// };

// var Person = function (name, year, job){
//     this.name = name;
//     this.year = year;
//     this.job = job; 
    
// }

// Person.prototype.calculateAge = 
// function(){
//     console.log(2020 - this.year); 
// };

// Person.prototype.quote = "I Need More Power!!!"
// Person.prototype.Lastname = 'ALDABOUBI!';

// var mohammad = new Person ('Mohammad', 1995, 'Developer');
// var tariq = new Person ('Tariq', 1996, 'Finance');
// mohammad.calculateAge();
// tariq.calculateAge();

// console.log(mohammad.Lastname);
// console.log(tariq.quote);


//Object.create Method 
// var personProto = {
//     calculateAge : function(){
//         console.log(2020 - this.year);
//     }
// };

// var mohammad = Object.create(personProto);
// mohammad.name = 'Mohammad';
// mohammad.year = 1995;
// mohammad.job = 'Developer';

// var tariq = Object.create(personProto, 
//     {
//         name: { value: 'tariq'},
//         year: {value: 1997},
//         job: {value: 'Finance'}
//     });


//Primitives vs Objects 

//Primitives
// var a = 32;
// var b = a;

// a = 92;
// console.log( a, b);

// var obj1 = {
//     name: 'Mohammad',
//     age: 25
// };

// //Objects
// var obj2 = obj1; 

// obj1.age = 30;

// console.log(obj1.age, obj2.age);


// //Functions

// var age = 77;

// var obj3 = {
//     name: 'Tariq',
//     city: 'Amman',
// };

// function change(a, b){
//     a = 30;
//     b.city = 'TEXAS';
// }

// change (age, obj3);

// console.log(age, obj3.city)

// Passing functions as arguments
// var x = [1990, 1993, 1995, 1998, 2000];

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes; 
// }

// function calculateAge(el){
//     return 2016 - el; 
// };

// var ages = arrayCalc(x, calculateAge);

// console.log(ages);

// function fullAge(el) {
//     return el >= 18; 
// }

// var trueAge = arrayCalc(ages, fullAge);

// console.log(trueAge);


// function maxHeartrate (el) {
//     if (el >= 18 &&  el <= 81){
//     return Math.round(206.9 - (0.67 * el));
// }
// else{
//     return 1;
// }};

// var heart = arrayCalc(ages, maxHeartrate);

// console.log(heart);

// Functions returning functions

// function interviewQuestion(job){
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ' can you please explain what a UX design is?');
//         }} else if (job === 'teacher'){
//             return function(name){
//                 console.log(name + ' can you explain what is a teacher?')
//             }
//         }
//         else{
//             return function(name){
//                 console.log(name + 'Hello stranger, what exactly do you do for a living mortal?');
//             }
//         }
//         };

//         var teacherQuestion = interviewQuestion('teacher');
//         teacherQuestion();

//         var designerQuestion = interviewQuestion('designer');
//         designerQuestion('SK');

//         interviewQuestion('power')('mohammad');

// IIFE



// (function(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// )();

// //console.log(score);


// (function(goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// }
// )(5);


//Closures

// function retirement(retirementAge){
//     var a = ' years left until retirement';
//     return function (year){
//       var age =  2020 - year; 
//         console.log((retirementAge - age) + a);
//     }
// }


// var retirementUS = retirement(66); 


// retirementUS(1995);


// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany('1996');
// retirementIceland('1995');

// function interviewQuestion(job){
//     var designer = " can you please explain to me what is a UX?";
//     var teacher = " teaches math.";
//     var fill = " what do you work?";
//     return function(name){
//         if (job === 'designer'){
//             console.log(name + designer);
//         }else if(job === 'teacher') {
//             console.log(name + teacher);
//         }else{
//             console.log(name + fill);
//         }
//     }
// }

// var interviewDesigner = interviewQuestion('designer');
// var interviewTeacher = interviewQuestion('teacher');
// var interviewWhatever = interviewQuestion('Demon Slayer');

// interviewDesigner('Mohammad');
// interviewTeacher('Tariq');
// interviewWhatever('Omar');
// interviewQuestion('teacher')('SK');


////Bind, Call and Apply

// var john = {
//     name: 'John',
//     age: 15,
//     sport: 'Football',
//     job: 'designer',
//     presentation: function(style, timeOfDay){
//         if (style === 'formal'){
//             console.log('Good' + timeOfDay + ' Ladies and Gentelment Im' + this.name + ' and I am a ' + this.job + ' and I play ' + this.sport);
//         }else if (style === 'friendly'){
//             console.log('Yo whats up my bois, my name is ' + this.name + ' its ' + timeOfDay + ' but who cares am I right? I bet I can whoop all ya asses in ' + this.sport);
//         }
//     }
// }

// john.presentation('formal', 'Morning');

// var emily = {
//     name: 'Emily',
//     job: 'Designer',
//     age: 33,
//     sport: 'kickboxer'
// };

// john.presentation.call(emily, 'friendly', 'emily');

// //john.presentation.apply(emily, ['friendly', 'afternoon'])

// var johnFriendly = john.presentation.bind(john, 'friendly');

// var emilyFormal = john.presentation.bind(emily, 'formal');

// emilyFormal('afternoon');


// var x = [1990, 1993, 1995, 1998, 2000];

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes; 
// }

// function calculateAge(el){
//     return 2016 - el; 
// };

// var ages = arrayCalc(x, calculateAge);

// console.log(ages);

// function fullAge(limit, el) {
//     return el >= limit; 
// }

// var ages = arrayCalc(x, calculateAge);
// var fullJapan = arrayCalc(ages,fullAge.bind(this, 20) );

// console.log(fullJapan);

//Coding Challenge 
var point = 0;

var Question = function (question, answers = [], correctAnswer ){
    this.question = question;
    this.answers =  answers;
    this.correctAnswer = correctAnswer; 
}
var question0 = new Question('Who is the best person in the world?', ['Mohammad', 'Everyone Else'], '0');
var question1 = new Question('Best game ever created? ', ['Skyrim', 'Devil May Cry', 'The Witcher'], '1');
var question2 = new Question('Best  Gaming Console?', ['PlayStation', 'Xbox'], '0');
var question3 = new Question('Strongest person in the OG Squad?', ['Mohammad', 'Jason', 'Tyler', 'Tariq'], '0');

var store = [question0, question1, question2, question3];

var selectRandom =  {
    randomQuestion: function() {
    var random = Math.floor(Math.random() * 4 );
    var x = store[random];
    console.log(store[random].question);
        for (var i = 0; i < x.answers.length; i++){
             console.log(i +'-' + x.answers[i] );
        } 
        return x;
    }
};

function score(point) {
    console.log('Your score is: ' + point);
    console.log('------------------------')
    
};
  

(function promt(){
    var z = true;
    exit = z;
    var x = selectRandom.randomQuestion();
    var correct = 'Correct!';
    var wrong = 'Wrong!';
    
    var prom = prompt('Please select the correct answer (just type the number)');
   // console.log(x.correctAnswer);
    console.log(prom);
    if (prom === x.correctAnswer)
    {
        console.log(correct);
        console.log('Check:' + point);
        score(++point)
        promt();
        exit = false;
        //selectRandom.randomQuestion();
    }else if(prom == 'exit'){
        return console.log('You exited the game');
        
    }
    else if (prom != x.correctAnswer){
        console.log(wrong);
        score(point);
        promt();
    }
})();


//console.log(prom);
// var point = 0;
// function score (point){
//     z =+ point + 1; 
//     console.log('The score is: ' + z);
// }

// function promt(){
//     var prom = prompt('Please select the correct answer (just type the number)');

//     if(prom == 1){
//         score(point++);
//         promt();
//     }
// }

// promt();