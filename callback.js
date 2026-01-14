//Callback function
function greet(name,callback){
    console.log("Hello!!!" +name+ "!!!!");
    callback();
}
function thankyou(){
    console.log("Have a nice day!!");
}
greet("Sravanthi",thankyou);
// output: Hello!!!Sravanthi!!!!
// Have a nice day!!

// Anonymous callback function
setTimeout(() => {
    console.log("Sai Sravanthi Kondaviti!!!")
}, 2000);
// output: Sai Sravanthi Kondaviti!!! after 2 seconds...

