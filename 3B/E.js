// E. Автомобильные номера

// Ограничение времени               1 секунда
// Ограничение памяти                64Mb
// Ввод                              стандартный ввод или input.txt
// Вывод                             стандартный вывод или output.txt

// Неизвестный водитель совершил ДТП и скрылся с места происшествия. Полиция 
// опрашивает свидетелей. Каждый из них говорит, что запомнил какие-то буквы и 
// цифры номера. Но при этом свидетели не помнят порядок этих цифр и букв. 
// Полиция хочет проверить несколько подозреваемых автомобилей. Будем говорить, 
// что номер согласуется с показанием свидетеля, если все символы, которые 
// назвал свидетель, присутствуют в этом номере (не важно, сколько раз).

// Формат ввода

// Сначала задано число M <= 100 - количество свидетелей. Далее идет M строк, 
// каждая из которых описывает показания очередного свидетеля. Эти строки 
// непустые и состоят из не более чем 20 символов. Каждый символ в строке - либо 
// цифра, либо заглавная латинская буква, причём символы могут повторяться.

// Затем идёт число N <= 1000 - количество номеров. Следующие строки 
// представляют из себя номера подозреваемых машин и имеют такой же формат, как 
// и показания свидетелей.

// Формат вывода

// Выпишите номера автомобилей, согласующиеся с максимальным количеством 
// свидетелей. Если таких номеров несколько, то выведите их в том же порядке, в 
// котором они были заданы на входе.

// Пример 1
// Ввод                Вывод
// 3                   B137AC
// ABC
// A37
// BCDA
// 2
// A317BD
// B137AC

// Пример 2
// Ввод                Вывод
// 2                   A143BC
// 1ABC                C143AB
// 3A4B
// 3
// A143BC
// C143AB
// AAABC1

// Язык: Node.js 14.15.5

function count(data) {
    data = data.toString().trim().split(/\s+/);
    let witnessesCount = Number(data[0]);
    let testimonies = data.slice(1, witnessesCount+1);
    let numbers = Number(data[witnessesCount+1]);
    let numbersSuspect = data.slice(witnessesCount+2).map(elem => [elem, new Set(elem.split('')), 0]);
    let max = 0;
    function intersection(testimony,numberSuspect){
        for(let i = 0; i < testimony.length; i++){
            if(!numberSuspect.has(testimony[i])){
                return false;
            }
        }
        return true;
    }
    for(let i = 0; i<numbersSuspect.length; i++){
        for(let k = 0; k < testimonies.length; k++){
            if(intersection(testimonies[k],numbersSuspect[i][1])) {
                numbersSuspect[i][2]++;
            }
            
        }
        max = Math.max(max,numbersSuspect[i][2]);
        console.log(max)
    }
    
    return numbersSuspect.filter(item=> item[2]==max).map(item=>item[0]).join('\n');
  }
  
  const fs = require('fs');
  const fileContent = fs.readFileSync('input.txt', 'utf8');
  
  const result = count(fileContent);
  
  fs.writeFileSync('output.txt', result + '');