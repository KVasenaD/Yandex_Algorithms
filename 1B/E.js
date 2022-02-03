sum = (data) => {
    let mas = data.toString().split(' ');
    return +mas[0] + +mas[1];
};        
let cnt, res;
process.stdin.on('data', data => {
    res = sum(data);
    process.stdout.write(res + '');
    process.exit();
});
readline.question(``, (str1) => {
    readline.question(``, (str2) => {
        let num1= Number(str1);
        let arr2 = str2.split(" ");
        let num2 = arr2.map(Number); 
        let a = (0 - num2[0]) * (0 - 0) - (num1 - 0) * (0 - num2[1]);
        let b = (num1 - num2[0]) * (num1 - 0) - (0 - num1) * (0 - num2[1]);
        let c = (0 - num2[0]) * (0 - num1) - (0 - 0) * (num1 - num2[1]);
        let A = Math.sqrt((num2[0]) ** 2 + num2[1] ** 2);
        let B = Math.sqrt((num2[0] - num1) ** 2 + num2[1] ** 2);
        let C = Math.sqrt(num2[0] ** 2 + (num2[1] - num1) ** 2);
        let mass = [0,A,B,C];
            if((a>=0 && b>=0 && c>=0) || (a<=0 && b<=0 && c<=0)){
                console.log(0);
                readline.close();
            } 
            else{
                let min = Math.min(A,B,C);
            console.log(mass.indexOf(min));
            readline.close();
            }
    })
})