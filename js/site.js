// index:      0,1,2,3,4,5,6,7,8, 9
let numbers = [1,2,3,4,5,6,7,8,9,10];

// wire up the button
document.getElementById("btnSubmit").addEventListener("click", doJsWork);


function doJsWork() {
    
    let size = numbers.length;
    let arraySize = parseInt(document.getElementById("arraySize").value);
    numbers = generateArray(arraySize);


    // let element = 0;
    output1 = document.getElementById("results");
    output2 = document.getElementById("results2");
    output3 = doucment.getElementById("results3");

    output1.innerHTML = ""
    output2.innerHTML = ""
    output3.innerHTML = ""
    // add values to the arry
    // size = numbers.push(11);
    // size = numbers.push(20);

    // remove items
    // numbers.pop();

    // filter the array (reduce it down)
     var filtered = numbers.filter(function(value, index, arr){
      return value > 5;
     }   
    )

    

// find a value in an array Will only return the FIRST Occurance -one item
// var found = numbers.find(function(value,index,arr) {
//     return value > 5;

// })

// true or false answer
var found = numbers.includes(7);


    // print out the full array
    for (let index = 0; index < numbers.length; index++) {
         output1.innerHTML += `${numbers[index]} `;      
    }

    output2.innerHTML = found;
    // print out filtered array
     for (let index = 0; index < filtered.length; index++) {
        output2.innerHTML += `${found[index]} `;
    }

    // output 3
   output3.innerHTML = found; 
}
//    for (let index = 0; index < filtered.length; index++) {
    // output3.innerHTML += `${filtered[index]} `;


// generate an array of random values
function generateArray(size){
   let randomArray = [];
   for (let index = 0; index < size.length; index++) {
    // generate random array...push random numbers to an array
       randomArray.push( Math.floor(Math.random() * 100) + 1);       
   }

   return randomArray;
}