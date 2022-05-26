let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job'); 
let mainPopup = document.querySelector('.popup');

const openPopup = document.querySelector('.profile__button_function_edit');
const closePopup = document.querySelector('.popup__button_function_close');

let form = document.querySelector('.popup__form');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

openPopup.addEventListener('click', function () {
    mainPopup.classList.add('popup_opened');
    nameInput.textContent = profileTitle.value;
    jobInput.textContent = profileSubtitle.value;
})
closePopup.addEventListener('click', function () {
    mainPopup.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value; 
    profileSubtitle.textContent = jobInput.value;
    mainPopup.classList.remove('popup_opened');
}

form.addEventListener('submit', formSubmitHandler); 