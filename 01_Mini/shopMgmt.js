class MobileShop {
    constructor() {
        this.mobiles = []
    }
    addMobile(mobile) {
        this.mobiles.push(...mobile)
    }
    listAllMobile() {
        this.mobiles.forEach((M, In) => {
            console.log(`${In + 1}: ${M.brand}- ${M.model}- ${M.color}`)
        })
    }
}

class Mobile {
    constructor(brand, model, price, color) {
        this.id = Math.floor(Math.random() * 100000)
        this.brand = brand
        this.price = price
        this.color = color
        this.model = model
        this.sims = []
    }
    getMobileInfo() {
        console.log(`${this.brand} - ${this.model} = ${this.price} , ${this.color}`)
    }
    insertSim(sim) {
        if (this.sims.length === 2) {
            console.log('Sorry you have alredy 2 sims installed')
            return
        }
        this.sims.push(sim)
    }

}

class Sim {
    constructor(brand, balance) {
        this.brand = brand
        this.balance = balance
    }
    addBalance(balance) {
        if (balance < 0) {
            console.log(`balance shoud be greater than zero`)
            return
        }
        this.balance += balance
    }

}

let myMoblieShop = new MobileShop()
let samsung = new Mobile("Samsung", "Galaxy s25 Ultra", 120000, "balck")
let nokia = new Mobile("Nokia", 'xpera 500', 25000, "blue")
let tatadocomo = new Sim("Tata Docomo", 400)

samsung.insertSim(tatadocomo)
myMoblieShop.addMobile([samsung, nokia]) 