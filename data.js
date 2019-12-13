// first(2,(firstRes,err)=>{
// if(!err){
//     console.log(firstRes);
//     second(firstRes,(secRes,err)=>{
//         if(!err){
//             console.log(secRes);
//         }
//     })
// }
// })
// function first(val,callback){
//     callback(val+2,false)
// }
// function second(val,callback){
//     callback(val+3,false)
// }

let prom1 = new Promise((resolve, reject) => {
    resolve(2)
})
let prom2 = new Promise((resolve, reject) => {
    resolve(4)
})
// prom1.then((res) => {
//     console.log(res)
// })
prom1.then(prom2.then(res=>{
    console.log(res)
}))
Promise.all([prom1,prom2]).then(val=>{
    console.log(val)
}).catch(err =>{
    console.log(err,"failed")
})

async function test(){
    await prom1.then((res) => {
        console.log(res)
    })
    await prom2.then((res1) => {
        console.log(res1)
    })
}
test()