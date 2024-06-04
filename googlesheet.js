const ScriptURL = 'https://script.google.com/macros/s/AKfycbw4tm6nCJZ3d0a2kzqYj9LgUSTaXYjKkUjMroy0f2S5fVNyLPwKzjC5XGu80USP5DRN/exec'

const form = document.forms['demo-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(ScriptURL, { method: 'post', body: new FormData(form)})
    .then(Response => alert("Thank you! your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})