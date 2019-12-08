const parents = document.querySelectorAll('.parent');

// zad 0a
parents.forEach((parent) => {
	let children = parent.querySelector('.children');

	parent.addEventListener('mouseover', () => {
		children.style.display = 'flex';
	});

	parent.addEventListener('mouseout', function() {
		children.style.display = 'none';

		// zad 0b
		// TODO
		function hideChildrenElement() {
			console.log(this);
		};

	});
});


