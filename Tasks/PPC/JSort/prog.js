const fs = require("fs")

let name = []
let obj = {}
let nobj = {}

let flag = 'error_ghbdtnlheulfdfqdvtcntcsuhftvdcnaujkjvfnmbdpkfvsdfnm'

for (let i = 0; i < flag.length; i ++) {
    name.push(i)
}

name.sort()
console.log(name)

for (let i = 0; i < flag.length; i ++) {
    obj[name[i]] = flag[i]
}

console.log(obj)

for(let i = 0; i < flag.length; i ++) {
    fs.appendFileSync('lovelyJSON.txt', "'" + i + "': '" + obj[i] + "',\n", function(err) {})
}
