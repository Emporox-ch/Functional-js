// const studentNames = new Array();

// studentNames.push("Amrit");
// studentNames.push("Amrit");

// console.log({studentNames})


// Array store value in order while set store value in disorder.
// const studentIds = new Set();
// studentIds.add(1);
// studentIds.add(2);
// studentIds.add(1);


// console.log({studentIds})

// Converting an set to array, array to set

// const studentIds = [1,2,3,4,5];

// const uniqueIds = new Set(studentIds);

// const newUniqueIds = [...uniqueIds];
// console.log({newUniqueIds});

// Adding new item in set and removing

const newItem = new Set();
newItem.add("Hello");
newItem.add("From");
// newItem.clear();
//newItem.delete("From")

// // console.log(newItem.keys())
// console.log(newItem.entries())
// console.log({newItem});
// console.log(newItem.size);

console.log(newItem.has("From"));

// For--Each method 

// newItem.forEach((value)) => {
//     console.log(value)
// }