var num = Number(prompt('The calculation of N-th Fibonacci number. Enter a number N \(please not more than 1476, otherwise it will be infinity\):')),
calc = Number(prompt('Select the method of calculation: 1 - simple cycle; 2 - using array')),
fibNum,
fibNumMin1 = 1,
fibNumMin2 = 1,
i;
if (calc = 1) {
if (num <= 0 || parseInt(num) !== num ) {
    fibNum = 'not correct input - it has to be POSITIVE INTEGER NUMBER!'; 
    } else {
        if (num <= 2) {
        fibNum = 1;
        } else {
            for (i = 3; i <= num; i++) {
            fibNum = fibNumMin1 + fibNumMin2;
            fibNumMin2 = fibNumMin1;
            fibNumMin1 = fibNum;
}
}
}
document.write('For number: ' + num + ', the Fibonacci number is: ' + fibNum);
} else {
var fibNumM = [];
fibNumM[0] = fibNumM[1] = 1;
for (i = 2; i < num; i++) {
    fibNumM[i] = fibNumM[i - 1] + fibNumM[i - 2];
}

document.write('For number: ' + num + ', the Fibonacci number is: ' + fibNumM[num - 1]);
}