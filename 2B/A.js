// A. Количество равных максимальному

// Ограничение времени                   1 секунда
// Ограничение памяти                    64Mb
// Ввод                                  стандартный ввод или input.txt
// Вывод                                 стандартный вывод или output.txt
// Последовательность состоит из натуральных чисел и завершается числом 0. Всего 
// вводится не более 10000 чисел (не считая завершающего числа 0). Определите, 
// сколько элементов этой последовательности равны ее наибольшему элементу.

// Числа, следующие за числом 0, считывать не нужно.

// Формат ввода

// Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 
// 0 в последовательность не входит).

// Формат вывода

// Выведите ответ на задачу.

// Пример 1
// Ввод                    Вывод
// 1                       1
// 7
// 9
// 0

// Пример 2
// Ввод                    Вывод
// 1                       2
// 3
// 3
// 1
// 0

// Язык: Node.js 14.15.5

process.stdin.on('data', data => {
    res = sum(data);
    process.stdout.write(res + '');
    process.exit();
});
readline.question(``, (str1) => { 
    let num = Number(str1);
    let res;
    let stop;
    let arr = [num];
    goQuest();
    
    async function goQuest() {
        while(stop !== 0) {
        let promise = new Promise((resolve, reject) => {
            readline.question(``, (str) => {
                let num2 = Number(str);
                if(num2 != 0){
                arr.push(num2);
                }
                stop = num2;
                resolve(arr);     
            });
        });
        res = await promise;
        }  
    let max = Math.max.apply( null, res );
    let results = res.filter(item=>item == max); 
    console.log(results.length);
    readline.close();
    }
})

// function count(data) {
//     const numbers = data.toString().trim().split(/\s+/).map(Number);
  
//     let maxNumber = numbers[0];
//     let counter = 1;
  
//     for (let i = 1; i < numbers.length; ++i) {
//       if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//         counter = 1;
//       } else if (numbers[i] === maxNumber) {
//         ++counter;
//       }
//     }
  
//     return counter;
//   }
//   process.stdin.on('data', data => {
//     const result = count(data);
//     process.stdout.write(result + '');
//     process.exit();
//   });
