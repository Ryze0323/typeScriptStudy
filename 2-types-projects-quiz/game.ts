/**
 * Let's make a game 🕹
 */
let position = {
    x: 0,
    y: 0
}
type posi = 'up' | 'down' | 'left' | 'right';
function move(posi:posi) {
    switch (posi) {
        case 'up':
            position.y++;
            break;
        case 'down':
            position.y--;
            break;
        case 'left':
            position.x--;
            break;
        case 'right':
            position.x++;
            break;
        default:
            break;
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
