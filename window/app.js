let width = window.innerWidth;
let height = window.innerHeight;

console.log(`Window width is: ${width}px and Window height is: ${height}px`);

const box = document.querySelector('.box');

//positioning the box at the center of page
const moveBox = () => {
	box.style.left = width / 2 + 'px';
	box.style.top = height / 2 + 'px';

	console.log(`${box.style.left} and ${box.style.top}`);
};

moveBox();

window.onresize = () => {
	location.reload();
};
