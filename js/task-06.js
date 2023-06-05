const inputEl = document.querySelector("#validation-input")

const inputElData = document.querySelector('input[data-length="6"]')

inputEl.addEventListener("blur", (event) => {
    const inputValueLength = event.currentTarget.value.length
    const inputElDataValue = Number(inputElData.dataset.length)
    if (inputValueLength === inputElDataValue) {
        event.currentTarget.classList.remove("invalid")
        event.currentTarget.classList.add("valid")
        return
    }
event.currentTarget.classList.add("invalid")
})
