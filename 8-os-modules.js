const os =require('os')
//info
const user = os.userInfo()
console.log(user)
//Method returns system uptime in seconds
console.log(`The System runtime:${os.uptime} seconds`)
const currentOS ={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    FreeMem:os.freemem()
}
console.log(currentOS)