//calculating, storing the result and then displaying the result => JS always executes last called function
// const myDisplay = (some)=>{
//     document.getElementById('demo').innerHTML = some;
// }

// const myCalculation = (num1, num2)=>{
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculation(5,5);

// myDisplay(result);

/* using a callback */
const myDisplay = (some)=>{
    document.getElementById('demo').innerHTML = some;
}

//callback functions are always called as an argument for another function and passed without parenthesis
const myCalculation = (num1, num2, myCallback)=>{
    let sum = num1 + num2;
    myCallback(sum);
}

//myCalculation(5, 10, myDisplay);

//setInterval = > legacy callback function
// const myTimeFunction = ()=>{
//     let d = new Date();

//     document.getElementById('demo').innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
// }

// setInterval(myTimeFunction, 1000); // setInterval and setTimeout are asynchronous functions where we use callbacks

//JS promises => Syntax

// let myPromise = new Promise(function(resolve, reject){
//     //Producing code
//     myResolve(); //when successful
//     myReject(); //when error
// });

// //Consuming code (must wait for a full-filled promise)
// myPromise.then(
//     function(value) { /* code if successful */},
//     function(error){ /* code if some error */}
// );


const myDisplayer = (some)=>{
    document.getElementById('demo').innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject){
    let x = 0;
    //some code (try to change x to 5)

    if(x == 0){
        myResolve('ok');
    }else{
        myReject('Error');
    }
});

myPromise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);









