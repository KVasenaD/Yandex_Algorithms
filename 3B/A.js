// A. Количество совпадающих

// Ограничение времени                 1 секунда
// Ограничение памяти                  64Mb
// Ввод                                стандартный ввод или input.txt
// Вывод                               стандартный вывод или output.txt

// Даны два списка чисел, которые могут содержать до 100000 чисел каждый. 
// Посчитайте, сколько чисел содержится одновременно как в первом списке, так и 
// во втором. Примечание. Эту задачу на Питоне можно решить в одну строчку.

// Формат ввода

// Вводятся два списка чисел. Все числа каждого списка находятся на отдельной 
// строке.

// Формат вывода

// Выведите ответ на задачу.

// Пример 1
// Ввод                  Вывод
// 1 3 2                 2
// 4 3 2

// Пример 2
// Ввод                  Вывод
// 1 2 6 4 5 7           2
// 10 2 3 4 8

// Пример 3
// Ввод                  Вывод
// 1 7 3 8 10 2 5        5
// 6 5 2 8 4 3 7

// Язык: Node.js 14.15.5

const { Console } = require('console');

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(``, (str1) => { 
    readline.question(``, (str2) => { 
        //str1 = str1.replace(/\s+/g, '');
        //str2 = str2.replace(/\s+/g, '');
        let arr1 = str1.map(line => new Set(line.split(/\s+/)));
        let arr2 = str2.map(line => new Set(line.split(/\s+/)));

        
        console.log([...arr1].filter(elem => arr2.has(elem)).length);
        readline.close();

    })

})



// function count(data) {
//     const [line1, line2] = data.toString().trim().split('\n')
//       .map(line => new Set(line.split(/\s+/)));
//     return [...line1].filter(elem => line2.has(elem)).length;
//   }
  
//   const fs = require('fs');
//   const fileContent = fs.readFileSync('input.txt', 'utf8');
  
//   const result = count(fileContent);
  
//   fs.writeFileSync('output.txt', result + '');