

// //Function Declaration
// function greetMessage(){
//     console.log("Hello From Amrit.")
// }

// // Calling a Function
// greetMessage();
//Function Declaration
// function greetMessage(name, city){ // Here name is called as a parameter
//     console.log(`${name}, Hello!!`)
//     console.log(`Thankyou,For joing from ${city}`)
// }

// // Calling a Function
// greetMessage("Amrit","Kawasoti");//Here Amrit is an argument
// greetMessage("Ashish","USA");//Here Ashish is an argument

let count = 0;
function calculateSum (minValue,maxValue){

    for(let i = minValue;i<= maxValue;i++){
         count = count + i;
    }
    
    console.log(count);
}

calculateSum(1,10);
