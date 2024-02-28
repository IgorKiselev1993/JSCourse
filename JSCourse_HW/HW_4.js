CW
1
const person = {
    name: "Pete", age: 24, salary: 2550, street: "Some street", houseNum: 52
};

function calculateAverage(obj) {
    let count = 0;
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
            count++;
        }
    }
    if (count === 0) {
        console.log("Нет числовых значений для вычисления среднего.");
    } else {
        const average = sum / count;
        console.log("Среднее арифметическое числовых значений объекта:", average);
    }
}
calculateAverage(person);

2
function customAssign(target, source) {

    for (let key in source) {
        target[key] = source[key];
    }
    return target;
}

3

function formatDate(date) {
    const dateObject = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };

    let result = "";
    let step = 0;
    const separators = [".", ".", ",", ":", ":", ""];
    for (let key in dateObject) {
        result += addLeadingZero(dateObject[key]) + separators[step];
        step++;
    }
    return result;
}
function addLeadingZero(value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return value.toString();
    }
}

const currentDate = new Date();
const formattedDate = `"${formatDate(currentDate)}"`;
console.log(formattedDate);

4

const numbers = [5, -3, 9, -8, 3, 1, -5, 4];
const positiveNumbers = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
    }
}
console.log(positiveNumbers)
const totalSum = numbers.reduce((acc, current) => acc + current, 0);
console.log(totalSum)
const maxValue = Math.max(...numbers)
const minValue = Math.min(...numbers)
console.log(maxValue)
console.log(minValue)
const squaredNumbers = []

for (let key in numbers) {
    squaredNumbers.push(numbers[key] ** 2);
}
console.log(squaredNumbers)
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers)

HW
1
const students = [{name: 'Alice', grades: [85, 90, 92]},
    {name: 'Bob', grades: [78, 80, 75]},
    {name: 'Charlie', grades: [90, 92, 88]},
    {name: 'Anna', grades: [99, 60, 83]},
    {name: 'George', grades: [77, 82, 77]},
    {name: 'Nick', grades: [70, 90, 83]},];

function calculateAverage(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}
students.forEach(student => {
    const average = calculateAverage(student.grades)
    const roundedAverage = average.toFixed(2);
    student.averageGrade = Number(roundedAverage);
});
students.sort((a, b) => b.averageGrade - a.averageGrade);
console.log(students);
students.sort((a, b) => b.averageGrade - a.averageGrade);
const topStudents = students.slice(0, 3);
console.log(topStudents)

2

const array = [1, 2, 3, 4, 5, 6];

Array.prototype.findAndPush = function (element) {
    let found = false;
    for (let i of array) {

        if (this[i] === element) {
            let removed = this.splice(i, 1);
            this[this.length] = removed[0];
            found = true;
            break;
        }
    }
    return found;
};

console.log(array.findAndPush(2));
console.log(array);

3

function dateDifference(date1, date2) {

    let difference = Math.abs(date1 - date2);
    const tempDate1 = new Date(date1);
    const tempDate2 = new Date(date2);
    let yearsDiff = tempDate2.getFullYear() - tempDate1.getFullYear();
    tempDate2.setFullYear(tempDate1.getFullYear());
    let monthsDiff = tempDate2.getMonth() - tempDate1.getMonth();

    if (monthsDiff < 0) {
        yearsDiff--;
        monthsDiff += 12;
    }

    tempDate2.setMonth(tempDate1.getMonth());
    let daysDiff = tempDate2.getDate() - tempDate1.getDate();

    if (daysDiff < 0) {
        monthsDiff--;
        const daysInLastMonth = new Date(tempDate2.getFullYear(), tempDate2.getMonth(), 0).getDate();
        daysDiff += daysInLastMonth;
    }

    const hoursDiff = Math.floor(difference / (1000 * 60 * 60));
    const minutesDiff = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDiff = Math.floor((difference % (1000 * 60)) / 1000);
    return {
        years: yearsDiff,
        months: monthsDiff,
        days: daysDiff,
        hours: hoursDiff,
        minutes: minutesDiff,
        seconds: secondsDiff
    };
}

const date1 = new Date('2024-02-21T19:20:00');
const date2 = new Date('2021-08-01T11:50:15');
const difference = dateDifference(date1, date2);
console.log(difference);

4

const student = {
    name: 'Alice', age: 20, grade: 'A', address: {
        city: 'New York', zip: '10001',
    }, hobbies: ['reading', 'traveling'],
};

function printStudentInfo(student) {
    const {name, age, grade, address: {city, zip}, hobbies} = student;
    const studentInfo = `Student: ${name}, Age: ${age}, Grade: ${grade}, City: ${city}, Zip: ${zip}, Hobbies: ${hobbies.join(', ')}`;
    console.log(`"${studentInfo}"`);
}

printStudentInfo(student);

5

const user = {
    name: "Boris", age: 24
}
const newUser = {
    firstName: user.name, age: user.age
};
console.log(newUser)