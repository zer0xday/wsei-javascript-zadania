document.addEventListener('DOMContentLoaded', () => {
    class InvoiceManager {
        constructor() {
            this.form = document.querySelector('#invoiceData');
            this.checkbox = document.querySelector('input#invoice');
        }

        hideForm() {
            const { form } = this;
            form.style.display = 'none';
        }

        showForm() {
            const { form } = this;
            form.style.display = 'block';
        }

        getCheckboxStatus() {
            return this.checkbox.checked;
        }

        checkboxObserver() {
            const { checkbox } = this;

            checkbox.addEventListener('change', () => {
                const status = this.getCheckboxStatus();

                console.log(status);

                if (status) {
                    this.showForm();
                    return;
                };

                this.hideForm();

                return;
            });
        }

        init() {
            // hide form by default
            this.hideForm();
            // observe checkbox
            this.checkboxObserver();
        }
    };

    const invoiceManager = new InvoiceManager;
    invoiceManager.init();
});