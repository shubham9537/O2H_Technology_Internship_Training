//varibales in js

/*
myFunc()
const myFunc=function(){
    console.log("Hello world")
}

console.log(b)
const b=10;



*/

// var a;
// function obj(){
//     var a=20;
//     console.log(a)
// }



// obj()
//console.log(a)


// let a=10;
// {
//     let a=5;
//     console.log(a)
// }

// console.log(a)


// function outer(){
//     let a=1;
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }

// const res=outer()
// res()

// console.log(undefined==false)

// console.log(0 || 1 && 2)
// console.log(null || "JS")

// console.log(null ?? "JS")

// console.log(false && "hello")

// console.log("" ?? "Default")


// switch(true){
//     case 1<2:
//         console.log("a")
//         break;
//     case 2<3:
//         console.log("b")
// }

// let x=0

// do{
//     x++
//     console.log(x)
// }while(x<0)



// function add(a,b){
//     console.log(b)
//     return a+b
// }

// console.log(add(2))


// function add(a=10,b=5){
//     console.log("Value of a is:"+a)
//     console.log("Value of b is:"+b)
//     return a+b
// }

// console.log(add(0,20))

// function foo(){
//     let res=arguments
//     console.log(res)
//     for(let key in res){
//         console.log(typeof key)
//     }
// }

// foo(10,90,9)

// const obj={a:1,info:{name:"shubham"}}
// const obj2={...obj} 
// obj2.info.name="russel"
// console.log(obj)

// const obj3=structuredClone(obj)
// obj3.info.name="fireboys"
// console.log(obj)


// function show(){
//     console.log(this.x);
// }

// const obj4={x:10}
// // show.call(obj4,100)

// // show.apply(obj4, [10]);

// const func = show.bind(obj4, 10);
// func();




// function myfunc(){
//     let count=0
//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// const res=myfunc()
// res()
// res()


// Promise.resolve().then(()=>console.log('b'),0)
// console.log('s')


// new Promise(resolve=>{
//     console.log("inside resolve")
//     resolve()
// }).then(()=>{
//     console.log("then called")
// })

// Promise.any([
//     Promise.resolve(1),
//     Promise.reject(2),
    
//     Promise.resolve(3)
// ]).then(console.log()).catch(console.log)


// function func(){
// }

// func.prototype.x=10
// const res=new func()
// console.log(res.x)
// console.log(res.__proto__===func.prototype)


//Map

// const map=new Map([
//     ["Name","shubham"],
//     ["age",21]
// ])

// //console.log(map)

// for(let entry of map.entries()){
//     console.log(entry)
// }

// map.forEach((value,key)=>{
//     console.log(key,value)
// })

//object
obj={a:1,b:2}
const copyObj=obj
const newObj=Object.assign({},obj)
console.log(newObj)
obj.c=3
console.log(newObj)
console.log(copyObj)