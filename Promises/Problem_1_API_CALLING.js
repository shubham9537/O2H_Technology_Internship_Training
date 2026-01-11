

const retries=3
const delay=3000

const obj=()=>{
    return new Promise((resolve,reject)=>{
        const data={
            name:"shubham",
            age:10
        }
        const statusCode=200;
        if(statusCode===200){
            resolve(data)
        }else{
            reject("not success")
        }

    })

}




// obj.then((msg)=>{
//     console.log(msg)

// }).catch((err)=>{
//     console.log(err)
// })

const retry=(callback,retries,delay)=>{
    return new Promise((resolve,reject)=>{
        callback().then((result)=>{
            resolve(result)

        }).catch((err)=>{
            if(retries){
                console.log()
                setTimeout(()=>{
                    retry(callback,retries-1,delay).then((res)=>{
                        resolve(res)

                    }).catch((err)=>{

                        reject("retrying something")
                    })
                    

                },delay)

            }else{
                reject(err=>console.log(err))
            }

        })
    })

}

retry(obj,retries,delay).then((data)=>{
    console.log(data)

}).catch(err=>console.log(err))
// const retry=(callback,retries,delay)=>{
//     callback()

// }



