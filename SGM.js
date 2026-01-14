//globalscope variable
let passingmarks=50;

function student_details() {
    details = [
        { name: "sravanthi", Maths: 55 },
        { name: "nirosha", Maths: 75 },
        { name: "kartheek", Maths: 99 },
        { name: "upendra", Maths: 55 },
        { name: "harinath", Maths: 50 },
        { name: "reshma", Maths: 90 }
    ];

    let names = details.map(data => data.name);
    console.log(names);
    //[ 'sravanthi', 'nirosha', 'kartheek', 'upendra', 'harinath', 'reshma' ]

    let marks = details.filter(math => math.Maths >= passingmarks);
    console.log("The students passed:", marks);
    // output: The students passed: [
    //   { name: 'nirosha', Maths: 75 },
    //   { name: 'kartheek', Maths: 99 },
    //   { name: 'reshma', Maths: 90 }
    //]
    let arr=[];
    let avg = details.forEach(average => {
        arr.push({
            name:average.name,
            Maths:average.Maths*0.5
        });
    });
    console.log("The Students marks out of 50 are:", arr);
//  output:   The Students marks out of 50 are: [  
//   { name: 'sravanthi', Maths: 27.5 },
//   { name: 'nirosha', Maths: 37.5 },
//   { name: 'kartheek', Maths: 49.5 },
//   { name: 'upendra', Maths: 27.5 },
//   { name: 'harinath', Maths: 25 },
//   { name: 'reshma', Maths: 45 }
// ]

let upper=details.map(student=>({
    name:student.name.toUpperCase(),
    Maths:student.Maths
}));
console.log("Names in Uppercase:",upper);
// Output: Names in Uppercase: [
//   { name: 'SRAVANTHI', Maths: 55 },
//   { name: 'NIROSHA', Maths: 75 },
//   { name: 'KARTHEEK', Maths: 99 },
//   { name: 'UPENDRA', Maths: 55 },
//   { name: 'HARINATH', Maths: 50 },
//   { name: 'RESHMA', Maths: 90 }
// ]


    
}
student_details();