class Calculator {

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        return this.num1 + this.num2
    }

    multiply(num1, num2) {
        return num1 * num2
    }
}

let sum = new Calculator(2, 3).sum();

console.log(sum);

