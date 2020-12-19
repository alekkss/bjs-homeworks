function getResult(a, b, c) {
    "use strict";
    let d = b ** 2 - 4 * a * c;
    let x;
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / 2 * a;
        let x2 = (-b - Math.sqrt(d)) / 2 * a;
        x = [x1, x2];
    } else if (d === 0) {
        let x1 = (-b + Math.sqrt(d)) / 2 * a;
        x = [x1];
    } else {
        x = [];
    }

    return x;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        averageMark = 0;
    } else {
        averageMark = marks;
        averageMark = averageMark.slice(0, 5);
        averageMark = averageMark.reduce((x, y) => x + y) / averageMark.length;
    }
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let result;
    let date = dateOfBirthday.getFullYear();
    let currentDate = new Date().getFullYear();
    if (currentDate - date < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    return result;
}