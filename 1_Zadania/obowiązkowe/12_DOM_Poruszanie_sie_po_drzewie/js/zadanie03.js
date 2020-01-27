document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.listContainer');

    function mouseCallback() {
        const listElements = this.querySelectorAll('li');

        listElements.forEach((li) => {
            li.style.backgroundColor = 'green';
        });

        listElements[0].style.backgroundColor = 'red';
        listElements[listElements.length - 1].style.backgroundColor = 'blue';
    }

    function mouseOutCallback() {
        const listElements = this.querySelectorAll('li');

        listElements.forEach((li) => {
            li.style.backgroundColor = '';
        });
    }

    elements.forEach((el) => {
        el.addEventListener('mouseover', mouseCallback);
        el.addEventListener('mouseout', mouseOutCallback);
    });
});
