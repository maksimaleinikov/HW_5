const client_1 = {
    name: 'Alf',
    age: 27,
    balance: 100,
    alcoholName: 'vodka',
    alcoholCount: 5
}
const client_2 = {
    name: 'Arthur',
    age: 22,
    balance: 50,
    alcoholName: 'beer',
    alcoholCount: 4
}
const client_3 = {
    name: 'Helen',
    age: 26,
    balance: 15,
    alcoholName: 'martini',
    alcoholCount: 2
}
const client_4 = {
    name: 'Chris',
    age: 17,
    balance: 20,
    alcoholName: 'vodka',
    alcoholCount: 2
}
const client_5 = {
    name: 'Steve',
    age: 29,
    balance: 80,
    alcoholName: 'whiskey',
    alcoholCount: 5
}
const client_6 = {
    name: 'Terry',
    age: 17,
    balance: 100,
    alcoholName: 'vodka',
    alcoholCount: 1
}
const client_7 = {
    name: 'John',
    age: 22,
    balance: 39,
    alcoholName: 'whiskey',
    alcoholCount: 4
}
const client_8 = {
    name: 'Max',
    age: 27,
    balance: 60,
    alcoholName: 'beer',
    alcoholCount: 4
}
const client_9 = {
    name: 'Natalie',
    age: 17,
    balance: 10,
    alcoholName: 'martini',
    alcoholCount: 2
}
const client_10 = {
    name: 'Jessica',
    age: 25,
    balance: 55,
    alcoholName: 'martini',
    alcoholCount: 5
}
let clients = [client_1, client_2, client_3, client_4, client_5, client_6, client_7, client_8, client_9, client_10];

let prices = {
    vodka: 13.2,
    martini: 13.5,
    whiskey: 15.5,
    beer: 8.2
}

const getClient = function(client) {
    const result = isValidAge(client.age);
    console.log(result);
    const kindOfAlc = returnPrice(client);
    console.log(kindOfAlc);
    const checkedAlc = returnPrice(client);
    const countTotal = getSum(client, checkedAlc);
    const chekedSum = checkMoney(client, countTotal);
    return result;
}

const isValidAge = function(age) {
    return age >= 18;
}

const returnPrice = function(client) {
    for (var key in prices) {
        if (key === client.alcoholName) {
            return prices[key];
        }
    }
    return prices[key];
}

const getSum = function(bottles, valueOfOne) {
    let sum = bottles.alcoholCount * valueOfOne;
    console.log(sum);
    return sum;
}

const checkMoney = function(balance, sum) {
    let divergence = balance.balance - sum;
    if (divergence >= 0) {
        return true;
    }
}

function init(arr) {
    arr.forEach(getClient);
}

const getRes = function() {

}

init(clients);