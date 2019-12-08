document.addEventListener('DOMContentLoaded', () => {
    class FormValidator {
        constructor() {
            this.form = document.querySelector('form');
            this.email = this.form.querySelector('#email');
            this.name = this.form.querySelector('#name');
            this.surname = this.form.querySelector('#surname');
            this.pass1 = this.form.querySelector('#pass1');
            this.pass2 = this.form.querySelector('#pass2');
            this.agree = this.form.querySelector('#agree');
            this.errorMessageArea = document.querySelector('.error-message');
        }

        clearMessageArea() {
            const errorLogs = this.errorMessageArea.querySelectorAll('.error-log');
            errorLogs.forEach(err => err.remove());

            const newLines = this.errorMessageArea.querySelectorAll('br');
            newLines.forEach((nl) => nl.remove());
        }

        pushMessage(message) {
            const { errorMessageArea } = this;

            let err = document.createElement('span');
            err.style.color = 'red';
            err.className = 'error-log';
            err.innerHTML = message;

            let newLine = document.createElement('br');

            errorMessageArea.appendChild(err);
            errorMessageArea.appendChild(newLine);

            return false;
        }

        validateEmail(input) {
            if (!input.value.includes('@')) {
                return this.pushMessage('Email musi posiadać znak @');
            }
            return true;
        }

        validateName(input, message) {
            if (input.value.length > 6) {
                return this.pushMessage(message);
            }
            return true;
        }

        validatePassword(input1, input2) {
            if (input1.length <= 0 && input2.length <= 0) {
                return this.pushMessage('Hasła nie są takie same lub puste');
            }   
        
            if (input1.value === input2.value) {
                //
            } else {
                return this.pushMessage('Hasła nie są takie same lub puste');
            }
            return  true;
        }

        validateCheckbox(input) {
            if (!input.checked) {
                return this.pushMessage('Musisz zaakceptować warunki');
            }
            return true;
        }

        init() {
            const { form } = this;

            form.addEventListener('submit', (event) => {
                const validators = [];
                const {
                    email, name, surname,
                    pass1, pass2, agree
                } = this;

                // clear message area first
                this.clearMessageArea();

                // validate fields
                validators.push(this.validateEmail(email));
                validators.push(this.validateName(name, 'Twoje imię jest za długie'));
                validators.push(this.validateName(surname, 'Twoje nazwisko jest za długie'));
                validators.push(this.validatePassword(pass1, pass2));
                validators.push(this.validateCheckbox(agree));
            
                validators.forEach((validator) => {
                    if (!validator) {
                        event.preventDefault();
                    }
                });
            });
        }
    }

    const formValidator = new FormValidator;
    formValidator.init();
});