const formLoginEl = document.querySelector(".login-form")

const handleSendForm = (event) => {
    
    event.preventDefault()

    const { elements: { email, password } } = event.currentTarget
    const emailValue = email.value
    const passwordValue = password.value
    if (emailValue && passwordValue) {
        const valueForm = {
            email: email.value,
            password: password.value
        }
        console.log(valueForm) 
        return
    }

    alert("Please fill in all fields")

    event.currentTarget.reset()
}

const sendForm = formLoginEl.addEventListener("submit", handleSendForm)

