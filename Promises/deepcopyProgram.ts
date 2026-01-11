
function creatingDeepCopyProgram<T>(data:T):T{
    if(data===null || typeof data!=="object"){
        return data
    }

    if(Array.isArray(data)){
        return data.map(item=>creatingDeepCopyProgram(item)) as T;
    }
    
    const result:any={};

    for(const key in data){
        if(Object.prototype.hasOwnProperty.call(data,key)){
            result[key]=creatingDeepCopyProgram((data as any)[key])
        }
    }

    return result
   

}

const datas={a:1,b:{c:2}}
const deepCopy=creatingDeepCopyProgram(datas)
deepCopy.b.c=10

console.log(deepCopy)
console.log(datas)



// function add<T>(a:T,b:T){
//     return (a+b) as T

// }
// const res=add(1,2)
// console.log(res)