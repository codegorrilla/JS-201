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
