import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const formData = {};

const KEY_STORAGE = 'feedback-form-state';

onPopulateForm();

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(KEY_STORAGE)
}

function onPopulateForm() {
    const data = localStorage.getItem(KEY_STORAGE);
    if (data) {
        formData = JSON.parse(data);
        Object.keys(formData).forEach(key => formRef[key].value = formData[key] )
    }
}