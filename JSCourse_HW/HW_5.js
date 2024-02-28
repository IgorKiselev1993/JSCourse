// 1
const orders = {};

function addOrder(orderNumber, amount, callback) {
    if (!orders[orderNumber]) {
        orders[orderNumber] = {amount: amount, completed: false};
        callback(`Заказ #${orderNumber} успешно добавлен`);
    } else {
        callback(`Заказ с номером ${orderNumber} уже существует`);
    }
}

function completeOrder(orderNumber, callback) {
    if (orders[orderNumber]) {
        orders[orderNumber].completed = true;
        callback(`Заказ #${orderNumber} успешно выполнен`);
    } else {
        callback(`Заказ #${orderNumber} не существует`);
    }
}

function listOrders(callback) {
    let formattedOrders = [];
    for (const orderNumber in orders) {
        const {amount, completed} = orders[orderNumber];
        const status = completed ? 'выполнен' : 'не выполнен';
        formattedOrders.push(`Заказ #${orderNumber} - Сумма: ${amount}, ${status}`);
    }
    callback(formattedOrders.join('\n'));
}

addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
completeOrder(3, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));

// 2
const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadUserData1() {
    return new Promise(() => {
        fetch(usersDataURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(users => {
                console.log('Полученные данные о пользователях:', users)
            })
            .catch(error => {
                console.log('Ошибка при загрузке данных:', error)
            });
    });
}

loadUserData1()
    .then(users => {
        console.log('Данные о пользователях получены:', users);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

// 3
const userDataURL = 'https://jsonplaceholder.typicode.com/users';

async function loadUserData() {
    try {
        const response = await fetch(userDataURL);
        const users = await response.json();
        console.log('Данные о пользователях получены:', users);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

loadUserData()


// 4
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        });
}

const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData2() {
    return fetchData(usersDataURL);
}

function loadPostsData() {
    return fetchData(postsDataURL);
}

Promise.all([loadUserData2(), loadPostsData()])
    .then(([userData, postData]) => {
        console.log('Полученные данные о пользователях:', userData);
        console.log('Полученные данные о постах:', postData);
    })
    .catch((error) => {
        console.log('Ошибка загрузки ', error)
    });

Promise.race([loadUserData(), loadPostsData()])
    .then(data => {
        console.log('Полученные данные :', data);
    })
    .catch((error) => {
        console.log('Ошибка загрузки ', error)
    });

// 5
function sendRandomRequest() {
    const target = ['/posts'];
    const randomTarget = target[Math.floor(Math.random() * target.length)];

    fetch('https://jsonplaceholder.typicode.com' + randomTarget)
        .then(response => response.json())
        .then(posts => console.log(posts))
        .catch(error => console.error('Ошибка запроса', error));
}

setInterval(sendRandomRequest, 500);

// 6
/*
1-ый цикл событий

1 синхронная операция
8 синхронная операция
5 первый в очереди Promise
7 второй в очереди Promise

2-ой цикл событий

2 первый в очереди макро задач из Callback Queue
3 второй в очереди макро задач из Callback Queue
4 первый в очереди микро задач Promise из Callback Queue
6 третий в очереди макро задач из Callback Queue
*/