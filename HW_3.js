function getTimeOfDay(currentHour) {
    if (currentHour > 0 && currentHour <= 6) {
        return "Ночь"
    } else if (currentHour > 6 && currentHour <= 12) {
        return "Утро"
    } else if (currentHour > 12 && currentHour <= 18) {
        return "День"
    } else {
        return "Вечер"
    }
}

let currentHour = 13;
let timeDay = getTimeOfDay(currentHour)
console.log("Time of Day ", timeDay)


for (let i = 0; i < 10; i++)
    console.log(i)

for (let i = 0; i < 10; i++) {

    if (i === 7) {
        break;
    }
    console.log(i)
}

let i = 1;
while (i <= 20) {
    if (i % 2 === 0 && i % 5 !== 0) {
        console.log(i);
    }
    i++;
}


function formatPhoneNumber(phoneNumber) {

    if (phoneNumber.length !== 10) {
        return "Неверный формат номера телефона";
    }


    let countryCode = phoneNumber.slice(0, 3);
    let cityCode = phoneNumber.slice(3, 6);
    let remainingDigits = phoneNumber.slice(6);


    let formattedPhoneNumber = `"(${countryCode}) ${cityCode}-${remainingDigits}"`;

    return formattedPhoneNumber;
}

let phoneNumber = "1234567890";
console.log(formatPhoneNumber(phoneNumber));


function multiplyTable(n) {

    if (Number.isInteger(n) && n > 0) {

        for (let i = 1; i <= n; i++) {
            let row = "";


            for (let j = 1; j <= n; j++) {

                row += (i * j) + " ";
            }


            console.log(row);
        }
    } else {
        console.log("Введите целое положительное число");
    }
}

multiplyTable(5);


function calculateFactorial(n) {
    if (Number.isInteger(n) && n >= 0) {
        let factorial = 1;

        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }

        return factorial;
    } else {
        console.log("Введите целое положительное число");
        return null;
    }
}

console.log(calculateFactorial(3));


function addWithLoss(num1, num2, precision = 1) {

    let sum = num1 + num2;

    let roundedSum = parseFloat(sum.toFixed(precision));

    return roundedSum;
}

console.log(addWithLoss(0.1, 0.2));
console.log(addWithLoss(1.001, 2.002, 2));


function processText(text) {

    return text.trim()
        .toLowerCase()
        .replaceAll()
}

console.log(processText("   Hello, World!   "));
console.log(processText("Another Example"));

function encodeString(string, key) {
    let encodedString = "";
    for (let i = 0; i < string.length; i++) {

        let charCode = string.charCodeAt(i);

        encodedString += String.fromCharCode(charCode + key);
    }
    return encodedString;
}

// Функция для декодирования строки
function decodeString(encodedString, key) {
    let decodedString = "";
    for (let i = 0; i < encodedString.length; i++) {

        let charCode = encodedString.charCodeAt(i);

        decodedString += String.fromCharCode(charCode - key);
    }
    return decodedString;
}


const originalString = "Hello, World!";
const key = 5;

const encodedString = encodeString(originalString, key);
console.log(encodedString);

const decodedString = decodeString(encodedString, key);
console.log(decodedString);
