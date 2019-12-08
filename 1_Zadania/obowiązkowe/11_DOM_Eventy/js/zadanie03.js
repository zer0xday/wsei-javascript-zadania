document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('button');
	const spans = document.querySelectorAll('span.counter');
	
	buttons.forEach((button, index) => {
		button.addEventListener('click', () => {
			spans[index].innerHTML++;
		});
	});
});