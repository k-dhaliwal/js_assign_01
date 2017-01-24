let mealcost=process.argv
let tipPercent=process.argv
const myVal=process.argv
let myArr=[]
mealcost = myArr.push(Number(myVal[2]))
tipPercent=myArr.push(Number(myVal[3]))
const tipAmount=(Number(myVal[3])/100)*(Number(myVal[2]))
const totalOwing=(tipAmount+mealcost)
const output='your meal was $${Number(myVal[2]))+ a ${Number(myVal[3])}% tipAmount=$(totalOwing)'
console.log(output)