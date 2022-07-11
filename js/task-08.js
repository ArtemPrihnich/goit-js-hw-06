const form = document.querySelector('form');
const input = document.querySelectorAll('form > label > input');

form.addEventListener("submit", onSubmit)

function onSubmit (event) {
    event.preventDefault();

    if (input[0].value === "" || input[1].value === "") {
        const message = "Все поля должны быть заполнены.";
        return alert(message);
    }

    const emailName = input[0].getAttribute("name");
    const passwordName = input[1].getAttribute("name");

    const data = {};

    data[emailName] = input[0].value;
    data[passwordName] = input[1].value;
    console.log(data)

    event.currentTarget.reset();
}



   // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log(`${name}: ${value}`);
    // });