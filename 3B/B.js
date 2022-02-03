// B. Встречалось ли число раньше

// Ограничение времени               1 секунда
// Ограничение памяти                64Mb
// Ввод                              стандартный ввод или input.txt
// Вывод                             стандартный вывод или output.txt

// Во входной строке записана последовательность чисел через пробел. Для каждого 
// числа выведите слово YES (в отдельной строке), если это число ранее 
// встречалось в последовательности или NO, если не встречалось.

// Формат ввода

// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода

// Выведите ответ на задачу.

// Пример
// Ввод                Вывод
// 1 2 3 2 3 4         NO
//                     NO
//                     NO
//                     YES
//                     YES
//                     NO

// Язык: Node.js 14.15.5

const { Console } = require('console');

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(``, (str) => { 
    let arr1 = str.split(" ");
    let arr2 = new Set();
    let result = [];
    arr1.forEach(item => {
        if(arr2.has(item)){
            result.push('YES');
    }
        else{
            result.push('NO');
            arr2.add(item);
        }
    })
console.log(result.join('\n'));
readline.close();

})

// function count(data) {
//     const arr1 = data.toString().trim().split(/\s+/).map(Number);
//     const arr2 = new Set();
//     const result = [];
//     arr1.forEach(item => {
//         if(arr2.has(item)){
//             result.push('YES');
//     }
//         else{
//             result.push('NO');
//             arr2.add(item);
//         }
//     })
//     return result.join('\n')
//   }
  
//   const fs = require('fs');
//   const fileContent = fs.readFileSync('input.txt', 'utf8');
  
//   const result = count(fileContent);
  
//   fs.writeFileSync('output.txt', result + '');