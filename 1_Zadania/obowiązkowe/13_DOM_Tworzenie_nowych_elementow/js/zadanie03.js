document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#remove');

    button.addEventListener('click', () => button.remove());
});