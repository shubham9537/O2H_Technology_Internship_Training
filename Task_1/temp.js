// function a(){
//     function run(){
//         console.log(n)
//     }
//     run();
    
// }

// a();
// var n=10;


// function fun(){
//     if(true){
//         let name="shubham"
//         console.log(name)
//     }
//     console.log(name)
// }

// fun()
// console.log(null == 0 )     // false
// console.log(undefined == 0) // false

// if (NaN) {
//   console.log("YES")
// } else {
//   console.log("NO")
// }
// console.log([] == true)


// function run(res){
//     console.log(res.name)
// }
// const obj={
//     name:"shubham",
//     age:21
// }

// obj["city"]="ahmedabad"
// run(obj)
//onsole.log(obj.name)


// setTimeout(() => {
//   console.log("Step 1")
//   setTimeout(() => {
//     console.log("Step 2")
//     setTimeout(() => {
//       console.log("Step 3")
//     }, 1000)
//   }, 1000)
// }, 1000)

//forEach Loop

// person=[
//     {name:"abcd",age:10},
//     {name:"pqrs",age:20},
//     {name:"apple",age:21}
// ]

// person.forEach(function(user){
//     console.log(user.name)
// })

// person.forEach((item,index)=>{
//     console.log(item.name)
// })



// const num=new Set([1,2,3])
// console.log(num)
// const obj={
//     firstName:"shubham"
// }

// console.log(obj?.address)

// function personInfo(){
//     console.log(`My name is ${this.firstName}`)
// }

// const person1={
//     firstName:"shubham",
//     age:21,
//     about:personInfo
// }

// const person2={
//     firstName:"ankur",
//     age:22,
//     about:personInfo
// }
// person1.about()
// person2.about()


// function main(num){
//     function add(n){
//         console.log(num+n)
//     }
//     return add
// }

// const res=main(5)
// res(1)
// res(2)
// res(10)

const myName=document.getElementById('my-name')
const btn=document.getElementById('btn')

function makeTextResizer(size){
    function changeSize(){
        myName.style.fontSize=`${size}px`
    }
    return changeSize
}

const size12=makeTextResizer(12)
const size20=makeTextResizer(20)
const size50=makeTextResizer(50)
const size100=makeTextResizer(100)

btn.addEventListener('click',size100)

