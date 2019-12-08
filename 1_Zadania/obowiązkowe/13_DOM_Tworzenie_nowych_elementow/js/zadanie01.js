document.addEventListener('DOMContentLoaded', () => {
    function createElement(parent, elementsNumber) {
        elementsNumber++;

        let el = document.createElement('li');
        el.innerHTML = 'Element ' + elementsNumber;

        parent.appendChild(el);
    }

    const list = document.querySelector('ul.menu');
    const button = document.querySelector('.button');

    button.addEventListener('click', () => {
        const elements = document.querySelectorAll('ul.menu > li'); 

        createElement(list, elements.length);
    });
});