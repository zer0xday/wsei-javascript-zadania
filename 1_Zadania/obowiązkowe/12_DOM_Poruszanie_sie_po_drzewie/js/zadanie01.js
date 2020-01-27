document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((btn) => {
       btn.addEventListener('click', function() {
           this.nextElementSibling.classList.toggle('hidden');
       });
    });
});