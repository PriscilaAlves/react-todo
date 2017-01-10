// function add (a, b) {
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));


// var groupA = ['Joao', 'Ines', 'Sergio'];
// var groupB = ['Barbara', 'Sara'];
// var final  = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Ana', 28];
var person2 = ['Joao', 29];

function msg (name, age) {
    console.log("Hi " + name + ", you are " + age);
}

msg(...person);
msg(...person2);

var names = ['Mike', 'Ben'];
var final = ['Ana', ...names];

final.forEach(function(item,index) {
    console.log("Hi " + item);
})
