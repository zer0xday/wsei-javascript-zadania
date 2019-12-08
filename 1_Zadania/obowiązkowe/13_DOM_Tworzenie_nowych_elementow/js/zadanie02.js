document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table#orders > tbody');

    const form = {
        orderId: document.querySelector('input#orderId'),
        item: document.querySelector('input#item'),
        quantity: document.querySelector('input#quantity')
    };

    const addBtn = document.querySelector('#addBtn');

    function createColumn(input, parent) {
        let el = document.createElement('td');
        el.innerHTML = input.value;

        parent.append(el);
        input.value = '';
    }

    function createWholeElement(form) {
        let element = document.createElement('tr');

        createColumn(form.orderId, element);
        createColumn(form.item, element);
        createColumn(form.quantity, element);

        table.appendChild(element);
    }

    addBtn.addEventListener('click', () => {
        createWholeElement(form);    
    });
});