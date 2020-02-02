document.addEventListener("DOMContentLoaded", function () {
    const type = document.querySelector("#type");
    const input = document.querySelector("#name");
    const VISA = 'Visa';
    const MASTERCARD = 'Mastercard';
    const AMERICAN_EXPRESS = "American Express";

    input.addEventListener("input", function (e) {
        const cardName = getCardName(this.value);
        validate(this.value, cardName);
        type.innerText = cardName;
    });

    function getCardName(number) {
        if (number[0] === '4') {
            return VISA;
        }

        if (number[0] === '5') {
            return MASTERCARD;
        }

        if (number[0] === '3' && (number[1] === '4' || number[1] === '7')) {
            return AMERICAN_EXPRESS;
        }

        input.style.border = '1px solid red';
        return null;
    }

    function validate(number, cardName) {
        if (isCardValid(number, cardName)) {
            input.style.border = "1px solid green";
        }
        else if (!number.length) {
            input.style.border = "1px solid #ccc";
        }
        else {
            input.style.border = "1px solid red";
        }
    }

    let isVisa = number => number.length >= 13 && number.length <= 16;
    let isMastercard = number => number.length === 16;
    let isAmericanExpress = number => number.length === 15;

    function isCardValid(number, cardName) {
        return !!((cardName === 'Visa' && isVisa(number)) ||
            (cardName === 'Mastercard' && isMastercard(number)) ||
            (cardName === 'American Express' && isAmericanExpress(number)));
    }
});
