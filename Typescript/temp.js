function creatingDeepCopy(data){
    if(data===null || typeof data!=="object"){
        return data

    }
    
    if(Array.isArray(data)){
        return data.map(item=>creatingDeepCopy(item))
    }


    const res={}
    for(let key in data){
        // console.log("Keys :"+key)
        // // console.log("res[key]:"+res[key])
        // console.log("Data inside for loop:"+data[key])
        res[key]=creatingDeepCopy(data[key])
    }
    console.log(res)

    return res

}

const obj = { a: 1, b: { c: 2 } };
const result=creatingDeepCopy(obj)
console.log(result)
obj.self=obj
result.b.c=3
console.log(obj)
// console.log(obj); 