class Student{
    constructor(name,marks){
        let _marks=marks;
        this.getmarks=function(){
            return _marks;
        };

        this.setmarks=function(newmarks){
            if(newmarks>=0&&newmarks<=100){
                _marks=newmarks;
                console.log("marks updated successfully");
            }
            else{
                console.log("invalid marks!!!");
            }
        };

        this.getresult=function(){
            return _marks>=35?"pass":"fail";
        };
    }
}

let s1=new Student("Sravanthi",80);

console.log("marks:",s1.getmarks());
console.log("result:",s1.getresult());

s1.setmarks(95);
console.log("updated marks:",s1.getmarks());

//output
// marks: 80
// result: pass
// marks updated successfully
// updated marks: 95
