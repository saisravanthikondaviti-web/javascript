// Square Pattern
let n=5;
let pattern="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        pattern +="* ";
    }
    pattern +="\n";
}
console.log(pattern);
//output:
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * *

//Right Angle Triangle Pattern
let m=5;
let patterns="";
for(let i=1;i<=m;i++){
    for(let j=1;j<=i;j++){
        patterns +="* ";
    }
    patterns +="\n";
}
console.log(patterns);
//output:
// * 
// * * 
// * * * 
// * * * * 
// * * * * *

// Inverted Right Angle Triangle Pattern
let p=5;
let patternss="";
for(let i=p;i>=1;i--){
    for(let j=1;j<=i;j++){
        patternss +="* ";
    }
    patternss +="\n";
}   
console.log(patternss);
//output:
// * * * * * 
// * * * * 
// * * * 
// * * 
// *

// Pyramid Pattern
let q=5;
let patternsss="";
for(let i=1;i<=q;i++){
    for(let s=1;s<=q-i;s++){
        patternsss +="  ";
    }
    for(let j=1;j<=(2*i-1);j++){
        patternsss +="* ";
    }
    patternsss +="\n";
}
console.log(patternsss);
//output:
//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * *

// Inverted Pyramid Pattern
let r=5;
let pattrn="";
for(let i=r;i>=1;i--){
    for(let s=1;s<=r-i;s++){
        pattrn+=" ";
    }
    for(let j=1;j<=(2*i-1);j++){
        pattrn +="* ";
    }
    pattrn +="\n";
}
console.log(pattrn);
//output:
// * * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         *

// Print each character of a string
let name="sravanthi";
for(let i=0;i<name.length;i++){
    console.log(name[i]);
}
//output:
// s
// r
// a
// v
// a
// n
// t
// h
// i


// Print each character of a string in reverse order
let names="sravanthi";
for(let i=names.length-1;i>=0;i--){
    console.log(name[i]);
}
//output:
// i
// h 
// t
// n
// a
// v
// r
// a
// s