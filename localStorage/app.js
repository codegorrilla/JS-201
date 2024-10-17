const input = document.querySelector('input');
const btn = document.body.querySelector('button');
const arr = [];

const saveVal = () => {
    const checkName = (name) => {
		return name;
	};

	if (input) {
		let val = input.value;
		//console.log(val);
		//localStorage.setItem('name', val);
		arr.push(val);
		const arr2 = [...arr];

		//console.log(arr);

		const storeName = arr2.map(checkName);

        localStorage.setItem('name', JSON.stringify(storeName));
        
        let saveName = JSON.parse(localStorage.getItem('name'));

        //console.log(`The names are: ${saveName}`);

        document.querySelector('p').innerHTML = `The names are: ${saveName}`;
	}

	
};

document
	.querySelector('#reset')
	.addEventListener('click', localStorage.clear());

btn.addEventListener('click', saveVal);
