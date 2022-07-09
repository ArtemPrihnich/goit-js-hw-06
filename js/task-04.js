let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');


const onDecrementAction = () => {
    counterValue -= 1;
    return counter.textContent = counterValue;
}
const onIncrementAction = () => {
    counterValue += 1;
    return counter.textContent = counterValue;
}

decrementButton.addEventListener("click", onDecrementAction);
incrementButton.addEventListener("click", onIncrementAction);

