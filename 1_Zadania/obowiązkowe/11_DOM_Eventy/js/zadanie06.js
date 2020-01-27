document.addEventListener('DOMContentLoaded', () => {
	let globalXEl = document.querySelector('#globalX'),
		globalYEl = document.querySelector('#globalY'),
		localXEl = document.querySelector('#localX'),
		localYEl = document.querySelector('#localY'),
		divEl = document.querySelector('div');

	divEl.addEventListener('mousemove', ev => {
		localXEl.innerHTML = ev.clientX;
		localYEl.innerHTML = ev.clientY;
	});

	window.addEventListener('mousemove', ev => {
		globalXEl.innerHTML = ev.clientX;
		globalYEl.innerHTML = ev.clientY;
	});
});