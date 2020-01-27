// zad 0a & 0b
document.addEventListener('DOMContentLoaded', () => {
	let parent;
	for (parent of window.document.querySelectorAll('.parent')) {
		parent.addEventListener('mouseover', function() {
			this.querySelector('.children').style.display = 'block';
		});

		parent.addEventListener('mouseout', function() {
			function hideChildrenElement() {
				this.querySelector('.children').style.display = 'none';
			}

			this.hideChildrenElement = hideChildrenElement;
			this.hideChildrenElement();
		});
	}
});
