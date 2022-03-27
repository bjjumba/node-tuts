const john='john'
const deru='peru'
const sum=(...args)=>{
    let j=0
    for(let i of args){
        j+=i
    }
    console.log(j)
}
//sum(3,4,4,5,6,0)
module.exports ={john,deru}
