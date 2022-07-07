
const categoryCounter = () => {
    const amountCategories = document.querySelectorAll(".item");
    console.log(`Number of categories: ${amountCategories.length}`)
}

categoryCounter();

const items = document.querySelectorAll(".item")

const categoriesAndElements = () => {
    items.forEach(item => {
        const amoundElements = item.querySelectorAll('li')
        const titel = item.querySelector('h2')

        console.log(`Category: ${titel.textContent}`)
        console.log(`Elements: ${amoundElements.length}`)
    })
}

categoriesAndElements();
