// C. Изготовление палиндромов

// Ограничение времени                     2 секунды
// Ограничение памяти                      512Mb
// Ввод                                    стандартный ввод или input.txt
// Вывод                                   стандартный вывод или output.txt

// В строкоремонтную мастерскую принесли строку, состоящую из строчных латинских 
// букв. Заказчик хочет сделать из неё палиндром. В мастерской могут за 1 
// байтландский тугрик заменить произвольную букву в строке любой выбранной 
// заказчиком буквой. Какую минимальную сумму придётся заплатить заказчику за 
// ремонт строки?

// Напомним, что палиндромом называется строка, которая равна самой себе, 
// прочитанной в обратном направлении.

// Формат ввода

// Входные данные содержат непустую строку, состоящую из строчных латинских 
// букв, которую принёс заказчик. Длина строки не превосходит 10^4.

// Формат вывода

// Выведите одно целое число — минимальную сумму, которую заказчику придётся 
// заплатить за превращение принесённой заказчиком строки в палиндром.

// Пример 1
// Ввод                      Вывод
// a                         0

// Пример 2
// Ввод                      Вывод
// ab                        1

// Пример 3
// Ввод                      Вывод
// cognitive                 4

// Язык: Node.js 14.15.5

// const { Console } = require('console');

// var readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question(``, (str) => { 
//     str = str.toString().trim();
// let reverse = str.split('').reverse().join('');
// let sum = 0;
// if(str === reverse){
//     console.log(0);
//     readline.close()}
//     else{
//         for(let i = 0; i < str.length; i++){
//             if(str[i] !== reverse[i]){
//             sum++;
//             }
//         }
// console.log(sum/2);
// readline.close()
//     }
// })

function palindrom(data) {
    let str = data.toString().trim();
    let reverse = str.split('').reverse().join('');
    let sum = 0;
    if(str === reverse){
        sum = 0
    }
    else{
        for(let i = 0; i < str.length; i++){
            if(str[i] !== reverse[i]){
            sum++;
            }
        }
    }
    
    return sum/2;
}
process.stdin.on('data', data => {
    const result = palindrom(data);
    process.stdout.write(result + '');
    process.exit();
  });