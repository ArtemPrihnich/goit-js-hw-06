const form = document.querySelector('form');
const input = document.querySelectorAll('form > label > input');

form.addEventListener("submit", onSubmit)

function onSubmit (event) {
    event.preventDefault();

    if (input[0].value === "" || input[1].value === "") {
        const message = "Все поля должны быть заполнены.";
        return alert(message);
    }

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log(`${name}: ${value}`);
    });

    event.currentTarget.reset();
}
