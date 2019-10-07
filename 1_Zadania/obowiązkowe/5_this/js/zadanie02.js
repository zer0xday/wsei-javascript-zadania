var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());
