let Cars = []
const create = document.querySelector('#create')

const name = document.getElementById('name'),
    color = document.getElementById('color'),
    speed = document.getElementById('speed'),
    price = document.getElementById('price')
    console.log(color, speed, price)

class Car {
    constructor(name, color, speed, price) {
        this.name = name;
        this.color = color;
        this.speed = speed;
        this.price = price;
    }
    add() {
        
    }
    remove() {
        
    }
    update(){

    }
    display(){
        
    }
}




create.addEventListener('click', add, true)