const control = document.getElementById("control");
const vid = document.querySelector("video");

function controlVid() {
	control.addEventListener("click", () => {
		console.log(`The duration of the video is: ${vid.duration}sec.`);
		if (vid.paused && vid.ended) {
			vid.play();
			document.querySelector(".fa-play").classList.add("hidden");
			document.querySelector(".fa-pause").classList.remove("hidden");
		} else if (vid.paused) {
			vid.play();
			document.querySelector(".fa-play").classList.add("hidden");
			document.querySelector(".fa-pause").classList.remove("hidden");
		} else if (vid.ended) {
			//this part not working
			vid.play();
			document.querySelector(".fa-play").classList.remove("hidden");
			document.querySelector(".fa-pause").classList.add("hidden");
		} else {
			vid.pause();
			document.querySelector(".fa-play").classList.remove("hidden");
			document.querySelector(".fa-pause").classList.add("hidden");
		}
	});
}

controlVid();
