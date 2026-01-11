
function myPromiseAll<T>(promises:Array<Promise<T> | T>):Promise<T[]>{
    return new Promise<T[]>((resolve,reject)=>{
        if(promises.length===0) return resolve([]);

        const results=new Array<T>(promises.length)
        let done=0;

        promises.forEach((p,i)=>{
            Promise.resolve(p).then(val=>{
                results[i]=val;
                if(++done===promises.length) resolve(results)
            }).catch(reject)
        })

    })

}

const p1 = new Promise(res => setTimeout(() => res(1), 1000));
const p2 = new Promise(res => setTimeout(() => res(2), 500));
const p3 = new Promise(res => setTimeout(() => res(3), 1500));

myPromiseAll([p1, p2, p3])
  .then(result => console.log(result))
  .catch(err => console.error(err));