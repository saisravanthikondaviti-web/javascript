console.log(a);
var a=20;
//output: undefined

function hoist(){
    var sentence="Hi ! How are you???";
    console.log(sentence);
}
hoist();
//output: Hi ! How are you???


function hoisting(){
    console.log(name);
}
hoisting();
var name="sravanthi";
//output: undefined

function hoisting(){
    var name="sravanthi";
    console.log(name);
}
hoisting();
//output: sravanthi

var name="sravanthi";
function hoisting(){
    console.log(name);
}
hoisting();
//output: sravanthi

