const newMap = new Map();

newMap.set(10,"Your Value will be here.")
newMap.set(11,"Your Value will be here all time.")
// console.log(newMap.get(10))

// newMap.delete(10);
// console.log(newMap);

newMap.forEach ((value) => {
    console.log(value);
})

console.log(newMap.has(10))