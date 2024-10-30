const btn = document.querySelector('button');
const result = document.querySelector('p');
const input = document.querySelector('input');
const arr = [];
//['mango', 'apple', 'banana'];

//getting the input value and creating an array out of it
const inputVal = (e) => {
	let val = e.target.value;
	result.innerHTML = val;
	//console.log(e.target.value);
};

input.addEventListener('change', inputVal);

const checkName = (name) => {
	return name;
};

btn.addEventListener('click', () => {
	arr.push(input.value);
	//arr2.unshift();
	//console.log(arr);
	const arr2 = [...arr];
	console.log(arr2);
	const strName = arr2.map(checkName);
	//console.log(strName);

	result.innerHTML = strName.toString().split(',');
});

const numInput = document.getElementById('num');
const numBtn = document.getElementById('getNum');
const arrBl = [];

numBtn.addEventListener('click', () => {
	arrBl.push(numInput.value);

	// let arr2 = [...arrBl];

	// function checkNum(num){
	// 	return num > 4
	// }

	// console.log('the index is: ' + arr2.findIndex(checkNum));

	localStorage.setItem('values', JSON.stringify(arrBl));

	numInput.value = '';

	const numArr = JSON.parse(localStorage.getItem('values'));
	console.log(numArr);
});


const demoArr = [3, 4, 5, 6];
const age = [12, 14, 15, 21];

// function sumArr(sum, n){
// 	return sum + n;
// }

//reduce method
// document.querySelector('.displaySum').innerHTML = demoArr.reduce(sumArr);

function checkAge(age){
	return age > 14
}

//findIndex method
document.querySelector('.displaySum').innerHTML = age.findIndex(checkAge);


