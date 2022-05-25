let nameInput = document.querySelector('.name-input');
let jobInput = document.querySelector('.job-input'); 
let mainPopup = document.querySelector('.popup');

const addButton = document.querySelector('.add-button');
const openPopup = document.querySelector('.edit-button');
const closePopup = document.querySelector('.popup__close');

let closeButton = document.querySelector('.popup__button');

let form = document.querySelector('.popup__form');
let myName = form.querySelector('.my-name');
let myJob = form.querySelector('.my-job');

let infoTitle = document.querySelector('.info__title');
let infoSubtitle = document.querySelector('.info__subtitle');

openPopup.addEventListener('click', function formSubmitHandler (evt) {
    evt.preventDefault(); 
    mainPopup.classList.add('popup_opened');
})
closePopup.addEventListener('click', function formSubmitHandler (evt) {
    evt.preventDefault(); 
    mainPopup.classList.remove('popup_opened');
})


mainPopup.addEventListener('submit', function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.value;
    jobInput.value;
    infoTitle.textContent = nameInput.value; 
    infoSubtitle.textContent = jobInput.value;
}); 
