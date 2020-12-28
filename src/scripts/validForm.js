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

  const phone = {
    title: 'Phone',
    input: document.getElementById('phone'),
    container: document.querySelector('#phone-container'),
    errorText: null,
  };

  // text type validation start
  const validateTextTypeInput = (el) => {
    const textTypeElement = el;

    const elementValue = textTypeElement.input.value.trim();

    if (elementValue === '') {
      textTypeElement.errorText = `Field ${textTypeElement.title.toLowerCase()} cannot be empty`;

      const errorElement = FUNC.createErrorElement(textTypeElement);
      textTypeElement.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    if (elementValue.length < 3) {
      textTypeElement.errorText = `${textTypeElement.title} must be minimum 3 characters`;

      const errorElement = FUNC.createErrorElement(textTypeElement);
      textTypeElement.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    if (elementValue.length >= 20) {
      textTypeElement.errorText = `${textTypeElement.title} must be less than 20 characters`;

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

  // phone validation start
  const validateTelTypeInput = () => {
    const phoneValue = phone.input.value.trim();

    if (phoneValue === '') {
      phone.errorText = `Field ${phone.title.toLowerCase()} cannot be empty`;

      const errorElement = FUNC.createErrorElement(phone);
      phone.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    const regex = /^\+38\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/;

    if (!regex.test(phoneValue)) {
      phone.errorText = 'Phone format does not match';

      const errorElement = FUNC.createErrorElement(phone);
      phone.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 4000);

      return false;
    }

    return true;
  };

  isFieldsValid.push(validateTelTypeInput());
  // phone validation end
  const isAllFieldsValid = isFieldsValid.every((fieldValid) => fieldValid === true);

  if (!isAllFieldsValid) {
    event.preventDefault();
  }
};

const form = document.querySelector('.user-form');
form.addEventListener('submit', validateForm);
