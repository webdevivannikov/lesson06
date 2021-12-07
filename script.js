'use strict';

let num;
let guessNum;

function guess(y) {
    let x = getRandomArbitrary(1, 100);
    function find() {
        switch (true){    
            case y === 0:
                alert('Игра окончена');
                break;        
            case y > x:
                alert('Загаданное число меньше');
                y = +prompt('Угадай число от 1 до 100');
                return find(y);
            case y < x:
                alert('Загаданное число больше');
                y = +prompt('Угадай число от 1 до 100');
                return find(y);
            case y === x:
                alert('Поздравляю, Вы угадали!!!');
                break;
            
        }
    }
    find();
}

function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}


num = +prompt('Угадай число от 1 до 100');
guessNum = guess(num);

