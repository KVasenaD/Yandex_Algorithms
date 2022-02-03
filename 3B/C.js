// C. Уникальные элементы

// Ограничение времени                 1 секунда
// Ограничение памяти                  64Mb
// Ввод                                стандартный ввод или input.txt
// Вывод                               стандартный вывод или output.txt

// Дан список. Выведите те его элементы, которые встречаются в списке только 
// один раз. Элементы нужно выводить в том порядке, в котором они встречаются в 
// списке.

// Формат ввода

// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода

// Выведите ответ на задачу.

// Пример 1
// Ввод                  Вывод
// 1 2 2 3 3 3           1 

// Пример 2
// Ввод                  Вывод
// 4 3 5 2 5 1 3 5       4 2 1 

// Язык: Node.js 14.15.5

// const { Console } = require('console');

// var readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question(``, (str) => { 
//     let arr = str.split(" ");
//     const notUnique = new Set();
//     const first = new Set();
//     arr.forEach(item => {
//         if(!first.has(item)){
//             first.add(item);
//     }
//         else{
//             notUnique.add(item);
//         }
//     })
// console.log(arr.filter(elem => !notUnique.has(elem)).join(' '));
// readline.close();

// })

function count(data) {
    const arr = data.toString().trim().split(/\s+/).map(Number);
    const notUnique = new Set();
    const first = new Set();
    arr.forEach(item => {
        if(!first.has(item)){
            first.add(item);
    }
        else{
            notUnique.add(item);
        }
    })
    return arr.filter(elem => !notUnique.has(elem)).join(' ');
  }
  
  const fs = require('fs');
  const fileContent = fs.readFileSync('input.txt', 'utf8');
  
  const result = count(fileContent);
  
  fs.writeFileSync('output.txt', result + '');