document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul.list');
    const button = document.querySelector('#remove');

    button.addEventListener('click', () => {
        let childNodes = list.childNodes;
        [...childNodes].forEach((el) => el.remove());
    });
});