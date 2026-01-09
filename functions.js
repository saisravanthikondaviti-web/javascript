 //Function to perform basic arithmetic operations
 function operations(a,b){
    console.log("Addition:",a+b);
    console.log("Subtraction:",a-b);
    console.log("Multiplication:",a*b);
    console.log("Division:",a/b);
    return "Operations performed successfully";
}
console.log(operations(10,5));
//output:
// Addition: 15
// Subtraction: 5
// Multiplication: 50
// Division: 2
// Operations performed successfully

//Arrow function to calculate square of a number
const square = (num) => {
    return num * num;
};
console.log("Square of 4 is:", square(4));
//output:
// Square of 4 is: 16


//Student-details
function student_details(){
    let details=[
        {name:"Sravanthi",age:20,branch:"CSE",cgpa:9.1},
        {name:"Nirosha",age:22,branch:"CSE",cgpa:9.1},
        {name:"Tanuja",age:22,branch:"CSE",cgpa:9.3},
        {name:"Shakthi",age:21,branch:"CSE",cgpa:9.3},
        {name:"Poojitha",age:22,branch:"CSE",cgpa:9.3}
    ];
    return details;
    
}
console.log(student_details());
//output:
// [ { name: 'Sravanthi', age: 20, branch: 'CSE', cgpa: 9.1 },
//   { name: 'Nirosha', age: 22, branch: 'CSE', cgpa: 9.1 },
//   { name: 'Tanuja', age: 22, branch: 'CSE', cgpa: 9.3 },
//   { name: 'Shakthi', age: 21, branch: 'CSE', cgpa: 9.3 },
//   { name: 'Poojitha', age: 22, branch: 'CSE', cgpa: 9.3 } ]

//Average Marks Calculator
function Average(){
    students=[
        {name:"Sravanthi",maths:98,science:95,english:93},
        {name:"Nirosha",maths:87,science:89,english:85},
        {name:"Tanuja",maths:92,science:90,english:91},
        {name:"Shakthi",maths:88,science:86,english:84},
        {name:"Poojitha",maths:76,science:74,english:72}
    ];
    let total=0;
    for(let i=0;i<students.length;i++){
        let avg=(students[i].maths + students[i].science + students[i].english)/3;
        total+=avg;
        console.log(`Average marks of ${students[i].name} is: ${avg.toFixed(2)}`);
    }
}
console.log(Average());
//output:
// Average marks of Sravanthi is: 95.33
// Average marks of Nirosha is: 87.00
// Average marks of Tanuja is: 91.00
// Average marks of Shakthi is: 86.00
// Average marks of Poojitha is: 74.00


//Arrow function to calculate the highest marks among students
const highestMarks = () => {
    students=[
        {name:"Sravanthi",maths:98,science:95,english:93},
        {name:"Nirosha",maths:87,science:89,english:85},
        {name:"Tanuja",maths:92,science:90,english:91},
        {name:"Shakthi",maths:88,science:86,english:84},
        {name:"Poojitha",maths:76,science:74,english:72}
    ];
    let highest=0;
    let toppers="";
    for(let i=0;i<students.length;i++){
        let total=students[i].maths + students[i].science + students[i].english;
        if(total>highest){
            highest=total;
            toppers=students[i].name;
        }
    }
    return `The highest marks are scored by ${toppers} with total marks: ${highest}`;
};
console.log(highestMarks());
//output:
// The highest marks are scored by Sravanthi with total marks: 286


//printing results using console.log()
function printResults(){
   students=[
        {name:"Sravanthi",maths:98,science:95,english:93},
        {name:"Nirosha",maths:87,science:89,english:85},
        {name:"Tanuja",maths:92,science:90,english:91},
        {name:"Shakthi",maths:88,science:86,english:84},
        {name:"Poojitha",maths:76,science:74,english:72}
    ];
    let results="";
    for(let i=0;i<students.length;i++){
        let total=students[i].maths + students[i].science + students[i].english;
        let avg=total/3;
        results += `Name: ${students[i].name}, Total Marks: ${total}, Average Marks: ${avg.toFixed(2)}\n`;
    }
    return results;
}
console.log(printResults());