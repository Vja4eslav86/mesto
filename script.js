let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.name-input');
let jobInput = document.querySelector('.job-input'); 
let editButton = document.querySelector('#edit-button');
let addButton = document.querySelector('#add-button');
let popButon = document.querySelector('#popup__close');
let closeButton = document.querySelector('#popup__button');
let form = document.querySelector('.popup__form');
let myName = form.querySelector('.my-name');
let myJob = form.querySelector('.my-job');

function openPopup() {
    const openPopup = document.getElementById('popup_opened');
    popup.classList.toggle('active');
    console.log('работает');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameInput.value;
    jobInput.value;
    myName.textContent = nameInput.value;
    myJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 
