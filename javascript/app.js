let Cars = []
const create = document.querySelector('#create')

const name = document.getElementById('name'),
    color = document.getElementById('color'),
    speed = document.getElementById('speed'),
    price = document.getElementById('price')
    

class Car {
    constructor(n, c, s, p) {
        this.n = n;
        this.c = c;
        this.s = s;
        this.p = p;
    }
    static add() {
        const newCar = new Car(name.value, color.value, speed.value, price.value)
        console.log(newCar)
    }
    remove() {
        
    }
    update(){

    }
    display(){
        let table = ''
        
        var tbody = document.querySelector('tbody')
    }
}




create.addEventListener('click', Car.add())