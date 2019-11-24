document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.deleteBtn');

    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            this.closest("tr").remove();
        });
    });
});