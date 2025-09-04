// sum of all number from 1 to 20

let  addFrom = (min,max) => {
    let count = 0;
    for(let i = min; i<=max;i++){
        count = count + i;
    }
    return count;
}

const result = addFrom(1,20);
console.log(`SUm of Number from 1 to 20 is ${result}`);