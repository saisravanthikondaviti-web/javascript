function display(){
    array=[
       name="sravanthi",
       age=20,
       course="Ui/Ux"
    ];
    for(let i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }

}
display();
//output
//sravanthi
//20
//Ui/Ux


function object(){
   let values={
        vehicle:"car",
        brand:"maruthi-suzuki",
        dop:"12/12/2025",
        owner:"srihari"
    };
    for(let key in values)
        {
        console.log(key+":"+values[key]);
    }
}
object();
//output
//vehicle:car
// brand:maruthi-suzuki
// dop:12/12/2025
// owner:srihari