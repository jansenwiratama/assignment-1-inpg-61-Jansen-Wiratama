const btnSubmit = document.getElementById('btnSubmit')
const btnEdit = document.getElementById('btnEdit')

let inputName = document.querySelector('#inputName')
let inputRole = document.querySelector('#inputRole')
let inputAvailability = document.querySelector('#inputAvailability')
let inputAge = document.querySelector('#inputAge')
let inputLocation = document.querySelector('#inputLocation')
let inputExperience = document.querySelector('#inputExperience')
let inputEmail = document.querySelector('#inputEmail')

let textName = document.querySelector('#text-name')
let textRole = document.querySelector('#text-role')
let textAvailability = document.querySelector('#text-availability')
let textAge = document.querySelector('#text-age')
let textLocation = document.querySelector('#text-location')
let textExperience = document.querySelector('#text-experience')
let textEmail = document.querySelector('#text-email')
let formData = document.getElementById('form-data')


btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()

    if (!inputName.value != "" ||
        !inputRole.value != "" ||
        !inputAvailability.value != "" ||
        !inputAge.value != "" ||
        !inputLocation.value != "" ||
        !inputExperience.value != "" ||
        !inputEmail.value != "") {
        alert("input form tidak ada yang boleh kosong");
    } else {

        var konfirmasi = confirm(`Apakah anda ingin mengubah data?`)
        if (konfirmasi) {
            console.log(inputName.value, inputRole.value, inputAvailability.value, inputAge.value, inputLocation.value, inputExperience.value, inputEmail.value)
            textName.innerText = inputName.value
            textRole.innerText = inputRole.value
            textAvailability.innerText = inputAvailability.value
            textAge.innerText = inputAge.value
            textLocation.innerText = inputLocation.value
            textExperience.innerText = inputExperience.value
            textEmail.innerText = inputEmail.value
            formData.style.display = 'none'
        }
    }

})


btnEdit.addEventListener('click', function (event) {
    event.preventDefault()
    if (formData.style.display == 'none') {
        formData.style.display = 'block'
        inputName.value = textName.innerText
        inputRole.value = textRole.innerText
        inputAvailability.value = textAvailability.innerText
        inputAge.value = textAge.innerText
        inputLocation.value = textLocation.innerText
        inputExperience.value = textExperience.innerText
        inputEmail.value = textEmail.innerText
    } else {
        formData.style.display = 'none'
    }
})