const [addNums, addManyNums] = require("./phase-1");
// console.log(addNums(5))   // 15
// console.log(addManyNums(5)) //35

function addNums10Timing(increment) {
    let arr = []
    const start = Date.now()
    for(let i = 1; i <= 10; i++){
       arr.push(addNums(i * increment))
       const end = Date.now()
       console.log(addNums(i * increment))
       console.log('Timer:',(end - start)/1000, 'seconds')
    }


   return arr
  }



function addManyNums10Timing(increment) {
  let arr = []
  // console.time('addManyNums timer')
  const start = Date.now()
  for(let i = 1; i <= 10; i++){
     arr.push(addManyNums(i * increment))
     const end = Date.now()
     console.log(addManyNums(i * increment))
     console.log('Timer:', (end - start)/1000, 'seconds')
  }

 return arr
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
