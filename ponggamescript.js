// Thank you to this video for the tutorial on how to create this game https://www.youtube.com/watch?v=PeY6lXPrPaA

const INITIAL_VELOCITY = .025
const VELOCITY_INCREASE = 0.000001



class Ball {
    constructor(ballElem) {
       this.ballElem = ballElem 
       this.reset()
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value){
        this.ballElem.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value){
        this.ballElem.style.setProperty("--y", value)
    }

    rect() {
        return this.ballElem.getBoundingClientRect()
    }

    reset() {
        this.x = 50
        this.y = 50
        this.direction = { x: 0 } //unit vector
        while (
            Math.abs(this.direction.x)<= 0.2 || 
            Math.abs(this.direction.x) >= .9
            ) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading)}
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta) {
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
        const rect = this.rect()

        if (rect.bottom >= window.innerHeight || rect.top <=0) {
            this.direction.y *= -1
        }

        if (rect.right >= window.innerWidth || rect.left <=0) {
            this.direction.x *= -1
        }
    }
}

class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
    }

    get position() {
        return parseFloat(
            getComputedStyle(this.paddleElem).getPropertyValue("--position")
            )
    }

    set position(value) {
        this.paddleElem.style.setProperty("--position", value)
    }
}

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

function randomNumberBetween(min, max) {
    return Math.random() * (max- min) + min
}



//Update loop
let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta)
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})


window.requestAnimationFrame(update)