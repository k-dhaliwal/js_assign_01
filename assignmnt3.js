const myVal= process.argv
let myArr = []
myArr.push(Number(myVal[2]))
myArr.push(Number(myVal[3]))
let sum= []
sum= (Number(myVal[2])+Number(myVal[3]))

if(sum>10 && sum<100)
{ console.log("sum is greater than 10 and  less than 100")
}
else if
(sum>100 && sum<1000)
{ console.log("sum is greater than 100 but less than 1000")
}