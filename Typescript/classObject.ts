
/*
class myFunc{
    
    constructor(public username:string){
        this.username=username;
    }

    get name(){
        return this.username;
    }

    set name(value:string){
        this.username=value
    }
}

let obj=new myFunc("russel")

*/
function add<T extends number>(a: T, b: T): T {
    return (a+b) as T  
}
const res=add<number>(1,2)
console.log(res)