/*
    идея!!!
    можно вместо увеличения змеи просто добавлять ещё змею сзади, 
    тем самым увеличивать движение каждой 
    и при спуске каждая последующая змея будет нормально опускаться

*/



let snake = document.getElementById('snake')
let apple = document.getElementById('apple')

let winWid = document.getElementById('root').offsetWidth
let winHei = document.getElementById('root').offsetHeight

console.log(winWid, winHei)

let x = 0; 
let y = 0;

let lastKey;

let appleSize = '100px'

let Inter;

let speed = 150

let randNum; 

function oneStep(param) {
    snake.style.inset = `${y}px ${x}px`
    param
    console.log('help')
    console.log(x, randNum)
    checkCollision()
}

function createApple() {
    randNum = Math.floor(Math.random() * (winWid / 20) * 20)
    if (randNum % 20 != 0) {
        createApple()
    } else {
        console.log('rand = ', randNum)
        apple.style.display = 'block'
        apple.style.inset = `${0}px ${randNum}px`
        
        return randNum
    }
}

function checkCollision() {
    if (x == randNum || y == randNum) {
        console.log('Apple!!!')
        createApple()
        snake.style.width += appleSize
        // clearInterval(Inter)
    }
}

function step(param) {
    if (Inter) {
        clearInterval(Inter)
    }

    switch (param) {
        case 'right':
            Inter = setInterval(() => oneStep(x+=20), speed);
            break;

        case 'left':
            Inter = setInterval(() => oneStep(x-=20), speed);
            break;

        case 'top':
            Inter = setInterval(() => oneStep(y-=20), speed);
            break;

        case 'down':
            Inter = setInterval(() => oneStep(y+=20), speed);

            break;
    }

}

document.addEventListener('keydown', (e) => {
    lastKey = e.key
    switch (e.key) {
        case 'ArrowRight':
            step('right')
            break;

        case 'ArrowLeft':
            step('left')
            break;

        case 'ArrowUp':
            step('top')
            break;

        case 'ArrowDown':
            step('down')
            break;
    }
})

createApple()


