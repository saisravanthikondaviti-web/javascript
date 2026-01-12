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