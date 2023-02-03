
let Cars

if (localStorage.Cars != null) {
    Cars = JSON.parse(localStorage.getItem('Cars'))
}

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
        Cars.push(newCar)
        localStorage.setItem('Cars', JSON.stringify(Cars))
        console.log(Cars)
        Car.display()
    }

    static delete(i) {
        console.log(i)
        Cars.splice(i, 1)
        localStorage.setItem('Cars', JSON.stringify(Cars))
        Car.display()
    }

    update() { }

    static clear() {
        name.value = ""
        color.value = ""
        speed.value = ""
        price.value = ""
    }

    // getName(){      return this.n}
    // getColor(){     return this.c}
    // getSpeed(){     return this.s}
    // getPrice(){     return this.p}

    static display() {
        if (Cars.length == 0) {
            
        }
        else {
            let table = ''
            for (let index = 0; index < Cars.length; index++) {
                table += `
            <tr>
                <th scope="row">${index + 1}</th>
                    <td>${Cars[index].n}</td>
                    <td>${Cars[index].c}</td>
                    <td>${Cars[index].s} KM/H</td>
                    <td>${Cars[index].p}$</td>
                <td>
                <!-- edit button-->
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow"
                        class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path
                            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                </button>
                <!-- delete button-->
                <button onClick="Car.delete(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                        class="bi bi-trash" viewBox="0 0 16 16">
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </td>
        </tr>
            `
            }

            const tbody = document.getElementById('tbody')
            tbody.innerHTML = table
        }
    }
}

create.addEventListener('click', function (e) {
    Car.add()
    Car.clear()
    e.preventDefault()
})
Car.display()
