// const { Console } = require('console');
// var readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question(``, (str) => { 
//     let arr = str.split(" ").map(Number);
//     let shop_1;
//     let shop_2;
//     let max = -1;
//     arr.unshift(0);
//     arr.forEach(function(item, index, array) {
//         if(item == 1){
//         shop_1 = arr.indexOf(2, index);
//         shop_2 = arr.lastIndexOf(2, index);
//         if(shop_1 != -1 && shop_2 == -1)
//         {
//             min =  shop_1 - index;
//         }
//         else if(shop_1 == -1 && shop_2 != -1){
//             min =  index - shop_2;
//         }
//         else{
//             min = Math.min(shop_1 - index, index - shop_2);
//         }
        
//             if(min > max){
//                 max = min;
//             }
//         }
//     })
//     console.log(max);
//     readline.close();
// })

function shop(data) {
    const arr = data.toString().trim().split(/\s+/).map(Number);
    let shop_1;
    let shop_2;
    let max = -1;
    arr.unshift(0);
    arr.forEach(function(item, index, array) {
        if(item == 1){
        shop_1 = arr.indexOf(2, index);
        shop_2 = arr.lastIndexOf(2, index);
        if(shop_1 != -1 && shop_2 == -1)
        {
            min =  shop_1 - index;
        }
        else if(shop_1 == -1 && shop_2 != -1){
            min =  index - shop_2;
        }
        else{
            min = Math.min(shop_1 - index, index - shop_2);
        }
        
            if(min > max){
                max = min;
            }
        }
    })
    return max;
  }
  process.stdin.on('data', data => {
    const result = shop(data);
    process.stdout.write(result + '');
    process.exit();
  });