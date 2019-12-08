document.addEventListener('DOMContentLoaded', () => {
	const width = document.querySelector('#windowWidth');
	const height = document.querySelector('#windowHeight');

	getScale();

	window.addEventListener('resize', () => {
		getScale();
	});

	function getScale() {
		width.innerHTML = window.innerWidth;
		height.innerHTML = window.innerHeight; 
	}
});	