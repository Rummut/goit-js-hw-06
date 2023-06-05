const inputEl = document.querySelector("#name-input")

const outputEl = document.querySelector("#name-output")

const handleInputEl = (event) => {

    if (inputEl.value) {
        outputEl.textContent = event.currentTarget.value.trim()
        return
    } 
        outputEl.textContent = "Anonymous" 
}

inputEl.addEventListener("input", handleInputEl)