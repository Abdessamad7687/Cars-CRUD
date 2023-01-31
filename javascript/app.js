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
    static add(event) {
        const newCar = new Car(color.value, speed.value, price.value, price.value)
        console.log(newCar)
    }
    remove() {
        
    }
    update(){

    }
    display(){
        
    }
}




create.addEventListener('click', Car.add())