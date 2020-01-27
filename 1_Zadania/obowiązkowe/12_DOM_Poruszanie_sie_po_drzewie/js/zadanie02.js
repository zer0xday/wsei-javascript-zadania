document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((btn) => {
        btn.addEventListener('click', function() {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.parentElement.style.backgroundColor = randomColor;
        });
    });
});
