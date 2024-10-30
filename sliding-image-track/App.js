const track = document.getElementById('image-track');
const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
	track.dataset.mouseDownAt = '0';
	track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
	if (track.dataset.mouseDownAt === '0') return;

	const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
		maxDelta = window.innerWidth / 2;

	console.log(`The mouseDelte is: ${mouseDelta} and maxDelta is: ${maxDelta}`);

	const percentage = (mouseDelta / maxDelta) * -100,
		nextPercentageUnconstrained =
			parseFloat(track.dataset.prevPercentage) + percentage,
		nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

	track.dataset.percentage = nextPercentage;

	console.log(
		`The percentage is: ${percentage} and new percentage is: ${nextPercentage}`
	);

	track.animate(
		{
			transform: `translate(${nextPercentage}%, -50%)`,
		},
		{ duration: 1200, fill: 'forwards' }
	);

	for (const image of track.getElementsByClassName('image')) {
		image.animate(
			{
				objectPosition: `${100 + nextPercentage}% center`,
			},
			{ duration: 1200, fill: 'forwards' }
		);
	}
};

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);
