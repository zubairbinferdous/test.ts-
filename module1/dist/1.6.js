"use strict";
{
    // learning function
    // function
    function add(num1, num2 = 100) {
        return num1 + num2;
    }
    add(12, 12);
    // arrow-function
    const arrow = (num3, num4) => num3 + num4;
    // object function methord
    const poorUser = {
        name: "zubair",
        balance: 0,
        addBalance(balance) {
            return `this my new balance:${this.balance + balance}`;
        },
    };
    // map-function
    const arr = [1, 2, 3];
    const newArray = arr.map((elem) => elem * elem);
}
