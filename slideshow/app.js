let slideIndex = 1;
const showSlides = (n) => {
	let i;
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
};

showSlides(slideIndex);

document.querySelector('.prev').addEventListener('click', () => {
	console.log('clicked');
	showSlides((slideIndex += -1));
});

document.querySelector('.next').addEventListener('click', () => {
	console.log('clicked');
	showSlides((slideIndex += 1));
});

const currentSlide = (n) => {
	showSlides((slideIndex = n));
};

const dots = document.querySelectorAll('.dot');

dots.forEach((dot) => {
	dot.addEventListener('click', () => {
		console.log(`${slideIndex}`);
		currentSlide(slideIndex + 1);
	});
});
