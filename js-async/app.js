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


// const myDisplayer = (some)=>{
//     document.getElementById('demo').innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject){
//     let x = 0;
//     //some code (try to change x to 5)

//     if(x == 0){
//         myResolve('ok');
//     }else{
//         myReject('Error');
//     }
// });

// myPromise.then(
//     function(value){myDisplayer(value);},
//     function(error){myDisplayer(error);}
// );

//another example
// const loveFunction = (msg)=>{
//     document.getElementById('demo').innerHTML = msg;
// }

// setTimeout(loveFunction('I love you!!!'), 3000);

//the same example using promise
// let myPromise = new Promise(function(myResolve, myReject){
//     setTimeout(()=>{
//         myResolve('I love you!!!');
//     }, 3000)
// });

// myPromise.then(
//     function(value){
//         document.getElementById('demo').innerHTML = value;
//     }
// )

//another example
const myDisplayer = (some)=>{
    document.getElementById('demo').innerHTML = some;
}

// function getFile(myCallback){
//     let req = new XMLHttpRequest();

//     req.open('GET', 'some.txt');
//     req.onload = ()=>{
//         if(req.status == 200){
//             myCallback(req.responseText);
//         }else{
//             myCallback("Error: " + req.status);
//         }
//     }

//     req.send();
// }

//getFile(myDisplayer);


//same example with Promise
let myPromise = new Promise(function(myResolve, myReject){
    let req = new XMLHttpRequest();

    req.open('GET', 'some.txt');
    req.onload = ()=>{
        if(req.status == 200){
            myResolve(req.response);
        }else{
            myReject("File not found");
        }
    }

    req.send();
});

myPromise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);



//async make a function to return a Promise
//await makes a function wait for a Promise

/* 
* The await keyword can only be used inside an async function
* The two arguments resolve and reject are pre-defined in JS, we will not create them, but call one of them when the executor function is ready.
* Very often we will not need a reject function
*/

//waiting for a timeout
async function hello(){
    let myPromise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Hello I\'m Sanjib');
        }, 3000);
    })

    document.getElementById('hello').innerHTML = await myPromise;
}

hello();

//waiting for a file
async function getMsg(){
    let myPromise = new Promise(function(resolve){
        setTimeout(function(){
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'magnesium.txt');
            xhr.onload = function(){
                if(xhr.status == 200){
                    resolve(xhr.response);
                }else{
                    resolve("File not found");
                }
            };

            xhr.send();
        }, 3000);
    });

    document.getElementById('magnesium').innerHTML = await myPromise;
}

getMsg();