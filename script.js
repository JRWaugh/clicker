const grid = document.querySelector('.container')
const clickerElement = document.getElementById("clicker")
clickerElement.addEventListener('click', addCount)

const amountElement = document.getElementById('amount')
const autoThingerBtn = document.getElementById('at')
autoThingerBtn.addEventListener('click', buyClicker)

const autoThinger2Btn = document.getElementById('at2')
// Do a for loop to find all the buttons.
let count = 0
amountElement.textContent = count

let thing = {
    modifier : 100.0
};

class Thinger {
    constructor(basePrice, growth, amount, modifier) {
        this.basePrice = basePrice;
        this.growth = growth;
        this.amount = amount;
        this.modifier = modifier;
    }
    getPrice() {
        return this.basePrice * Math.pow(this.growth, this.amount)
    }
};

let autoThinger = new Thinger(50, 1.2, 0, 1.0)
let autoThinger2 = new Thinger(500, 1.2, 0, 1.0)

document.getElementById('at-price').textContent = 'Price: ' + autoThinger.basePrice
document.getElementById('at2-price').textContent = 'Price: ' + autoThinger2.basePrice

function addCount() {
    count += 1 * thing.modifier 
    amountElement.textContent = count
    buttonUpdate()
}

function buyClicker() {
    count = count - autoThinger.getPrice()
    amountElement.textContent = count
    autoThinger.amount++
    document.getElementById('at-price').textContent = 'Price: ' + autoThinger.getPrice()
}

function buttonUpdate() {
    // Do all this in a for loop
    console.log(count)
    console.log(autoThinger.getPrice())
    if(count >= autoThinger.getPrice()) {
        autoThingerBtn.removeAttribute('disabled')
    } else {
        autoThingerBtn.setAttribute('disabled', 'disabled')
    }

    if(count >= autoThinger2.getPrice()) {
        autoThinger2Btn.removeAttribute('disabled')
    } else {
        autoThinger2Btn.setAttribute('disabled', 'disabled')
    }
}

const btnsNext = document.querySelectorAll('.next')
for (const btn of btnsNext) {
    btn.addEventListener('click', function() {
        grid.style.transform = "translate(" + (-95 * this.value) + "vw, 0)"
    });
}

const btnsBack = document.querySelectorAll('.back')
for (const btn of btnsBack) {
    btn.addEventListener('click', function() {
        grid.style.transform = "translate(" + (-95 * this.value) + "vw, 0)"
    });
}