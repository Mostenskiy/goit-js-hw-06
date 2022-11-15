const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    }
}

const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', function () {
    console.log('Клікнути на декремент')

    counter.decrement();
    console.log(counter)
    valueEl.textContent = counter.value
} )


counterEl.lastElementChild.addEventListener('click', function () {
    console.log('Клікнути на інкремент')

    counter.increment();
    console.log(counter)
    valueEl.textContent = counter.value
} )