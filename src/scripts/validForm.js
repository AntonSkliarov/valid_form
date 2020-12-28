import FUNC from '../helpers/_functions';

const validateForm = (event) => {
  const isFieldsValid = [];
  const name = {
    title: 'Name',
    input: document.getElementById('name'),
    container: document.querySelector('#name-container'),
    errorText: null,
  };

  const surname = {
    title: 'Surname',
    input: document.getElementById('surname'),
    container: document.querySelector('#surname-container'),
    errorText: null,
  };

  // text type validation start
  const validateTextTypeInput = (el) => {
    const textTypeElement = el;

    const elementValue = textTypeElement.input.value.trim();

    if (elementValue === '') {
      textTypeElement.errorText = 'Field name cannot be empty';

      const errorElement = FUNC.createErrorElement(textTypeElement);
      textTypeElement.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    if (elementValue.length < 3) {
      textTypeElement.errorText = 'Name must be minimum 3 characters';
      const errorElement = FUNC.createErrorElement(textTypeElement);
      textTypeElement.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    if (elementValue.length >= 20) {
      textTypeElement.errorText = 'Name must be less than 20 characters';
      const errorElement = FUNC.createErrorElement(textTypeElement);
      textTypeElement.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    return true;
  };

  isFieldsValid.push(validateTextTypeInput(name));
  isFieldsValid.push(validateTextTypeInput(surname));
  // text type validation end

  const isAllFieldsValid = isFieldsValid.every((fieldValid) => fieldValid === true);

  if (!isAllFieldsValid) {
    event.preventDefault();
  }
};

const form = document.querySelector('.user-form');
form.addEventListener('submit', validateForm);
