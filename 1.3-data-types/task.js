function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let totalSum = amount - contribution;
    percent = 1 / percent;
    percent = percent / 12;
    let currentDate = new Date();
    let term = (date.getFullYear() - currentDate.getFullYear()) * 12;
    console.log(percent);

    let paymentMonth = totalSum * (percent + percent / (((1 + percent) ^ term) - 1));
    let pay = paymentMonth * term;
    pay = pay.toFixed(2);
    if (pay == 0) {
        pay = 0;
    }
    console.log(pay);
    return pay;

    // код для задачи №1 писать здесь
    // return totalAmount;
}

function getGreeting(name) {
    if (!name) {
        name = 'Аноним';
    }
    return `Привет, мир! Меня зовут ${name}.`;

}