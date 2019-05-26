// Model for every automatic clicker in the game
class Thinger {
    constructor(basePrice, growth, amount, modifier) {
        this.basePrice = basePrice;
        this.growth = growth;
        this.amount = amount;
        this.modifier = modifier;
    }
    getPrice() {
        return Math.round(this.basePrice * Math.pow(this.growth, this.amount))
    }
    toString() {
        return "Price: " + this.getPrice()
    }
};

// Variable to hold the number of 'things' generated
let count = 0
const counter = document.getElementById('counter')
counter.innerHTML = count

let thinger = new Thinger(0, 0, 0, 1.0)
const thingerBtn = document.getElementById("thinger")
thingerBtn.addEventListener('click', increment)

thingerBtn.previousElementSibling.innerHTML = count

let autoThingers = [new Thinger(50, 1.2, 0, 1.0), new Thinger(500, 1.2, 0, 10)]

const autoThingerBtns = document.querySelectorAll('.auto-thinger')
autoThingerBtns.forEach((btn, index) => {
    btn.thinger = autoThingers[index]
    btn.previousElementSibling.textContent = btn.thinger.toString()
    btn.addEventListener('click', buyThinger)
})

const btnsNext = document.querySelectorAll('.next')
for (const btn of btnsNext) {
    btn.addEventListener('click', function() {
        document.querySelector('.container').style.transform = "translate(" + (-95 * this.value) + "vw, 0)"
    });
}

const btnsBack = document.querySelectorAll('.back')
for (const btn of btnsBack) {
    btn.addEventListener('click', function() {
        document.querySelector('.container').style.transform = "translate(" + (-95 * this.value) + "vw, 0)"
    });
}

function increment() {
    counter.innerHTML = count++ + (1 * thinger.modifier)
    buttonUpdate()
}

function buyThinger() {
    count = count - this.thinger.getPrice()
    counter.innerHTML = count
    this.thinger.amount++
    console.log()
    this.previousElementSibling.textContent = this.thinger.toString()
    buttonUpdate()
}

function buttonUpdate() {
    autoThingerBtns.forEach((btn) => {
        if(count >= btn.thinger.getPrice()) {
            btn.removeAttribute('disabled')
        } else {
        btn.setAttribute('disabled', 'disabled')
        }
    })
}

function calculateIncrement() {
    let increment = 0
    autoThingerBtns.forEach((btn) => {
        increment += btn.thinger.amount * btn.thinger.modifier
    })
    return increment
}

setInterval(() => {
    count += calculateIncrement()
    counter.innerHTML = count
    buttonUpdate()
}, 1000)

