// function creatingDeepCopy(data) {
//     if (data === null || typeof data !== "object") {
//         return data;
//     }
//     if (Array.isArray(data)) {
//         return data.map(function (item) { return creatingDeepCopy(item); });
    
//     }
//     var result = {};
//     for (var key in data) {
//         if (Object.prototype.hasOwnProperty(key)) {
//             result[key] = creatingDeepCopy(data[key]);
//         }
//     }
//     return result;
// }
// var data = { a: 1, b: { c: 2 } };
// var res = creatingDeepCopy(data);
// console.log(res);

function creatingDeepCopy(data){
    if(data===null || typeof data!=="object"){
        return data

    }

    if(Array.isArray(data)){
        return data.map(item=>creatingDeepCopy(item))
    }


    const res={}
    for(let key in data){
        res[key]=creatingDeepCopy(data[key])
    }

    return res
}

const obj = { a: 1, b: { c: 2 } };
const result=creatingDeepCopy(obj)
result.b.c=10
console.log(obj); 
console.log(result)