// Problem 1

// set my array list 
let arrayNum = [3,7,10,15];
let sumArray = [10,13,17,18,22,25];

// wire up the button with a named function
document.getElementById("btnSubmit").addEventListener("click", function(){
    sumFears()});
document.getElementById("clear1").addEventListener("click", Clear1);
document.getElementById("clear2").addEventListener("click", Clear2);

// main driver function for app
function sumFears() {
    let element3 = document.getElementById("results3");
    var numK = parseInt(document.getElementById("numK").value);
    var found = sumArray.includes(numK);
    element3.innerHTML = found; 
    
}

// Extra Credit
// Let user set array list

let arrayNum2 = [num1,num2,num3,num4];

// button function
document.getElementById("btnSubmit2").addEventListener("click", function(){
    sumFears2()});

// main driver function for app
function sumFears2() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    let sumArray2 = [(num1 + num2),(num1 + num3),(num1 + num4),
        (num2 + num3),(num2 + num4),(num3 + num4)];
    let element3a = document.getElementById("results3a");
    var numK2 = parseInt(document.getElementById("numK2").value);
    var found = sumArray2.includes(numK2);
    element3a.innerHTML = found;
}
// generate an array of random values
function generateArray(size){
    let randomArray = [];
    for (let index = 0; index < size; index++) {
     // generate random array...push random numbers to an array
        randomArray.push( Math.floor(Math.random() * 100) + 1);       
    }
 
    return randomArray;
 }
 function Clear1(){
    document.getElementById("results3").innerText = "";
    document.getElementById("numK").value = "";
 }

 function Clear2(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("numK2").value = "";
    document.getElementById("results3a").innerText = "";
}

 //let numbers = generateArray();
    // let arraySize = parseInt(document.getElementById("arrayNum").value);
    // let numbers = generateArray(arraySize);
    // let element = document.getElementById("results");
    // let element2 = document.getElementById("results2");

//    for (let index = 0; index < numbers.length; index++) {
//     let num = arrayNum[index];
//     element.innerHTML += `${num} `;
// }

// for (let index = 0; index < filtered.length; index++) {
//     let num = filtered[index];
//     element2.innerHTML += `${num} `;
// }
 

// step 2 add numbers/values to the array
// let size = numbers.length;
// size = numbers.push(11);
// size = numbers.push(12);

// step 3
    // remove the last number from an array
       // numbers.pop();
    // remove the first number from the array
      //  numbers.shift() ; 

// step 4  - Note Returns on Array
    // return all numbers > 5 (filter array, reduce it down)
    // return number = 5
    // return numbers < 5

    // var filtered = numbers.filter(function (value, index, arr) {
    //     return value > 5;
    // });

// step 5 -Find a value in the array find a value in an array Will only return the FIRST Occurance -one item
     
// var found = numbers.find(function (value, index, arr) {
//     return value > 5;
// });
   
//  step 6 - Find an item using includes a number ---TRUE or FALSE

    // var found = arrayNum.includes(5);  

// step 7

//    var numK = parseInt(document.getElementById("numK").value);
//    var found = arrayNum.includes(numK);

    // print out the full array

    // element3.innerHTML = found;

    
//    for (let index = 0; index < filtered.length; index++) {
    // output3.innerHTML += `${filtered[index]} `;


