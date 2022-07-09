const input = document.querySelector('input')
const validLength = input.getAttribute("data-length")
console.log(input)
input.addEventListener("blur", (event) => {
    if (input.value.length >= validLength) {
        console.log(input)
        return event.currentTarget.setAttribute("id", "validation-input.valid")
    }
    if (input.value.length < validLength) {
        console.log(input)
        return event.currentTarget.setAttribute("id", "validation-input.invalid")
        
    }
})
