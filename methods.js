//--------------------------
//String Methods
//--------------------------

//function to calculate sum of array elements
function sum(){
    let number=[10,20,30,40,50];
    let total=0;
    for(let i=0;i<number.length;i++){
        total+=number[i];
    }
    return total;
}
console.log("Sum of array elements is:",sum());
//output:
// Sum of array elements is: 150

//function to convert to uppercase
function convertToUpperCase(str){
    return str.toUpperCase();
}
console.log("Uppercase String is:",convertToUpperCase("hello world"));
//output:
// Uppercase String is: HELLO WORLD

//function to convert to lowercase
function convertToLowerCase(str){
    return str.toLowerCase();
}
console.log("Lowercase String is:",convertToLowerCase("HELLO WORLD"));
// //output:
// Lowercase String is: hello world

//slice operations
function sliceString(str,start,end){
    return str.slice(start,end);
}
console.log("Sliced String is:",sliceString("Hello World",0,5));
console.log("Sliced String is:",sliceString("Hello World",-5));
//output:
// Sliced String is: Hello
// Sliced String is: World

//include method
function includesSubstring(str,substr){
    return str.includes(substr);
}
console.log("Includes 'World':",includesSubstring("Hello World","World"));
console.log("Includes 'world':",includesSubstring("Hello World","world"));
//output:
// Includes 'World': true
// Includes 'world': false



//--------------------------
//Array Methods
//--------------------------

// function to add element at the end
function addelement(){
    let arr=[1,2,3];
    arr.push(4);
    return arr;
}
console.log("Array after push:",addelement());
//output:
// Array after push: [ 1, 2, 3, 4 ]

//function to remove last element
function removeelement(){
    let arr=[1,2,3,4];
    arr.pop();
    return arr;
}
console.log("Array after pop:",removeelement());
//output:
// Array after pop: [ 1, 2, 3 ]

//function to add element at the beginning
function addAtBeginning(){
    let arr=[5,6,7,8];
    arr.unshift(4);
    return arr;
}
console.log("Array after unshift:",addAtBeginning());
//output:
// Array after unshift: [ 4, 5, 6, 7, 8 ]

//function to remove first element
function removeFromBeginning(){
    let arr=[4,5,6,7,8];
    arr.shift();
    return arr;
}
console.log("Array after shift:",removeFromBeginning());
//output:
// Array after shift: [ 5, 6, 7, 8 ]

//map method
function mapArray(){
    let arr=[4,5,6,7,8];
    let squared=arr.map(num=>num*num);
    return squared;
}
console.log("Squared array:",mapArray());
// //output:
// Squared array: [ 16, 25, 36, 49, 64 ]

//filter method
function filterArray(){
    let arr=[10,15,20,25,30];
    let filtered=arr.filter(num=>num>20);
    return filtered;
}
console.log("Filtered array:",filterArray());
// //output:
// Filtered array: [ 25, 30 ]

//foreach method
function forEachArray(){
    let arr=[1,2,3,4,5];
    let product=1;
    arr.forEach(num=>product*=num);
    return product;
}
console.log("Product using forEach:",forEachArray());
// //output:
// Product using forEach: 15
