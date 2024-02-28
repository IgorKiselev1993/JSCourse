// 1
const user = {
    name: "Boris",
    age: 24
}

user['firstName'] = user.name
delete user.name
console.log(user)

// 2
const fruitContainer = []
fruitContainer.push ('Lime','Orange','Fig')
fruitContainer[1] = 'Kiwi'
console.log(fruitContainer)

// 3

const yearsOfService = 5;
const performanceRating = 3;
const pay = 20000;
let bonus = 0;
function calcBonus (yearsOfServise, performanceRating) {
    if (yearsOfService < 5 && (performanceRating === 4 || performanceRating === 5)) {
        bonus = pay * 0.05
        return bonus
    } else if (yearsOfService >= 5 && (performanceRating === 4 || performanceRating === 5)) {
        bonus = pay * 0.1
        return bonus
    } else {
        return `Cотрудник не получает бонус!`
    }
}
console.log (calcBonus(yearsOfService,performanceRating));
const employeeInfo = {
    yearsOfService: yearsOfService,
    performanceRating: performanceRating,
    pay: pay,
    bonus: bonus
};
console.log(employeeInfo);
// 4
const userData = {
    name: "Victor",
    age: 31,
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        zipCode: '12345'
    }
}
const userData2 = {
    name: "Vlad",
    age: "31",
    address: {
        street: '456 Oak Avenue',
        city: 'Townsville',
        state: 'Stateland',
        zipCode: null
    }
}
const data = [userData, userData2]
if (data[2]) {
    console.log("1") // Массива с индексом 2 нету = false
} else if (data[0].age === data[1].age && !(typeof data[0].name !== "string" || typeof data[1].address.zipCode)) {
    console.log("2") // первая часть условия строка не ровна числу будет false
} else if (typeof data[0].name === "string" && +data[1].age <= 0) {
    console.log("3") // вторая часть условия не будет выполненна 31 > 0
} else if (typeof data[1].address["zipCode"] === "object") {
    console.log("4") //null по typeof является "object"=== "object" = true
} else {
    console.log("5")
}
// 5
let programmingLanguage = 'JavaScript'
switch (programmingLanguage) {
    case('JavaScript'):
        console.log('JavaScript - отличный выбор для веб-разработки!')
        break
    case('Python'):
        console.log('Python - мощный и удобный язык для разработки.')
        break
    case('Java'):
        console.log('Java - популярный язык для разработки кросс-платформенных приложений.')
        break
    case('C++'):
        console.log('C++ - язык с высокой производительностью и возможностями низкоуровневого программирования.')
        break
    default:
        console.log('Не соответствует ни одному из вышеперечисленных вариантов')

}
