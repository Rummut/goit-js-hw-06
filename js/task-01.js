
const allCategoriesEl = document.querySelector('#categories')
const allItemsEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${allItemsEl.length}`)

allItemsEl.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`)
}) 