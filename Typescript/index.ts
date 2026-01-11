//console.log("hello world")

// type City={
//     name:String,
//     population:number

// }

// type Planet={
//     name:String,
//     cities:number

// }

// type CitiesInPlanet=City&Planet;


// let value:CitiesInPlanet={
//     name:"Bhopal",
//     population:10000,
//     cities:12,

// }


//Type Alias

// type User={
//     name:string;
//     age:number;
//     //email:string
// }

// type user:User={
//     name:"Russel",
//     age:100,
//     //email:"yrussel@gmail.com"
// }


//Interface
//type vs interfaces

// interface Food{
//     name:string;
//     price:number;
// }
// interface MithaFood extends Food{
//     sweet:boolean;
// }

// function getFood(mithFood:MithaFood){
    
// }


// class myClass{
//     color="white";
//     tonnes=75;
//     company="voltas";
//     temperature=12;

//     turnOn(){
//         console.log("turning on...")

//     }

//     turnOff(){
//         this.temperature=32
//     }

//     raiseTemperature(){
//         this.temperature++;
//         console.log(this.temperature)

//     }

//     decreaseTemperature(){
//         console.log("decreasing temperature")
//     }


// }




class User{
    balance=1200;
    getBalance(){
        console.log(this.balance)
    }

}

let u1=new User()
u1.getBalance()