// index:      0,1,2,3,4,5,6,7,8, 9
let numbers = [1,2,3,4,5,6,7,8,9,10];

// wire up the button with a named function
document.getElementById("btnSubmit").addEventListener("click", function(){
    doJsWork()});

// main driver function for app
function doJsWork() {
    //let numbers = generateArray();
    let arraySize = parseInt(document.getElementById("arrayNum").value);
    let numbers = generateArray(arraySize);
    let element = document.getElementById("results");
    let element2 = document.getElementById("results2");
    let element3 = document.getElementById("results3");

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

    var filtered = numbers.filter(function (value, index, arr) {
        return value > 5;
    });

// step 5 -Find a value in the array find a value in an array Will only return the FIRST Occurance -one item
     
var found = numbers.find(function (value, index, arr) {
    return value > 5;
});
   
//  step 6 - Find an item using includes a number ---TRUE or FALSE

    var found = numbers.includes(5);  

// step 7

   var findNum = parseInt(document.getElementById("findNum").value);
   var found = numbers.includes(findNum);

    // print out the full array

    element3.innerHTML = found;

    for (let index = 0; index < numbers.length; index++) {
        let num = numbers[index];
        element.innerHTML += `${num} `;
    }

    for (let index = 0; index < filtered.length; index++) {
        let num = filtered[index];
        element2.innerHTML += `${num} `;
    }
}
//    for (let index = 0; index < filtered.length; index++) {
    // output3.innerHTML += `${filtered[index]} `;


// generate an array of random values
function generateArray(size){
   let randomArray = [];
   for (let index = 0; index < size; index++) {
    // generate random array...push random numbers to an array
       randomArray.push( Math.floor(Math.random() * 100) + 1);       
   }

   return randomArray;
}