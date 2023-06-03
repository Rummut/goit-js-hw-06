const counterValue = {
    value: 0,

    decrement() {
        this.value -=1
    },

 increment() {
        this.value +=1
    }

}
const ref = {
    spanValue: document.querySelector('#value'),
    decrementBtnEl: document.querySelector('button[data-action="decrement"]'),  
    incrementBtnEl: document.querySelector('button[data-action="increment"]')
}

const buttonDecrementAdd = () => {
    counterValue.decrement ()
    ref.spanValue.textContent = counterValue.value
}

const buttonIncrementAdd = () => {
    counterValue.increment ()
    ref.spanValue.textContent = counterValue.value
}

ref.decrementBtnEl.addEventListener("click", buttonDecrementAdd)

ref.incrementBtnEl.addEventListener("click", buttonIncrementAdd)