// Array.from бере
/* let json = ["user1", "user2", "user3", "user4", "user5"];

const jsonString = JSON.stringify(json)
console.log(jsonString)






let lists = Array.from(document.querySelectorAll(".list li"))


console.log(lists)
const item = lists.map((list) => {
    return list.textContent
})

console.log(item)

let use = ["user1", "user2", "user3", "user4", "user5"]

let used = document.querySelector('#users')
let uset = JSON.parse(use)

for (let user of use) {
    let li = document.createElement('li')
    user.appendChild('li')
    li.textContent = user
    uI = document.createElement('uI');
    uset.appendChild(obj);
    uI.textContent = uset
}



let json4 = `[
    {
        "name": "user1",
        "age": 25,
        "salary": 1000
    },
    {
        "name": "user2",
        "age": 26,
        "salary": 2000
    },
    {
        "name": "user3",
        "age": 27,
        "salary": 3000
    }
]`
const employees = JSON.parse(json4)
const tbody = document.querySelector('#emplo');

console.log(employees);


for (let employee of employees) {
    let tr = document.createElement('tr')
    tbody.appendChild(tr)
    tr.innerHTML = `
<td>${employee.name}</td>
<td>${employee.age}</td>
<td>${employee.salary}</td>
`
}
 */


// задание 5
//ПОЛУЧИТЬ ПРЕДСТАВЛЕНРЫЕ ДАННЫЕ В ФОРМФТЕ JSON в виде объекта с ключами 
//Найти все  строки таблицы кроме 1

//tr:not(:first-child)первого небудет
const rows = document.querySelectorAll('#task5  tr:not(:first-child) ')

//создать пустой массив для результатов
const result = [];

//перебрать каждую строку таьлицы
rows.forEach((row) => {
    //найти все ячейки в текущей строке
    const cells = row.querySelectorAll('td')

    //создать объект для одного человека
    const peron = {
        //первая ячуйка -фамилия
        surname: cells[0].textContent,

        name: cells[1].textContent,
        patronymic: cells[2].textContent
    }

    //добавить элементы
    result.push(peron)


})

//преброзовать масив в json

const jsonr = JSON.stringify(result)

console.log(jsonr)
