let student={
    name:"sravanthi",
    rollno:1,
    marks:{
        maths:89,
        science:87,
        english:90
    }
    };
function gradecalc(marks){
    if(marks>=90){
        return "A";
    }
    else if(marks>=80){
        return "B";
    }
    else if(marks>=70){
        return "C";
    }
    else if(marks>=60){
        return "D";
    }
    else{
        return fail;
    }
}

function caluclation(subject){
    let marks;
    switch(subject){
        case "Maths":
        marks=student.marks.maths;
        break;

        case "Science":
        marks=student.marks.science;
        break;

        case "English":
        marks=student.marks.english;
        break;

        default:
            console.log("No subject found!!");
            return;
    }

    let grade=gradecalc(marks);

    console.log("student name:",student.name);
    console.log("subject:",subject);
    console.log("marks:",marks);
    console.log("grade:",grade);
}

caluclation("Maths");
caluclation("Science");
caluclation("English");

//output
//student name: sravanthi
// subject: Maths
// marks: 89
// grade: B
// student name: sravanthi
// subject: Science
// marks: 87
// grade: B
// student name: sravanthi
// subject: English
// marks: 90
// grade: A