/**
 * Let's make a calculator 🧮
 */

function calculate(fun:string, param1:number, param2:number): number {
    let reval: number;
    switch (fun) {
        case 'add':
            reval = param1 + param2;
            break;
        case 'substract':
            reval = param1 - param2;
            break;
        case 'multiply':
            reval = param1 * param2;
            break;
        case 'divide':
            reval = param1 / param2;
            break;
        case 'remainder':
            reval = param1 % param2;
            break;
        default:
            break;
    }

    return reval;
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

