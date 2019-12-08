document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('button');
	const counter = document.querySelector('.counter');

	buttons.forEach((button) => {
		button.addEventListener('click', () => counter.innerHTML++);
	});
});