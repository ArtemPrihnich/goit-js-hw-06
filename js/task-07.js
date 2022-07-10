const input = document.querySelector('input');
const text = document.querySelector('span');
text.style.fontSize = "14px";


input.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
})
