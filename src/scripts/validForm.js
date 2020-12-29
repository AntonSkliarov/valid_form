import FUNC from '../helpers/_functions';

const validateForm = (event) => {
  const isFieldsValid = [];

  const name = {
    title: 'Name',
    input: document.getElementById('name'),
    container: document.querySelector('#name-container'),
    errorText: null,
    errorElement: null,
  };

  const surname = {
    title: 'Surname',
    input: document.getElementById('surname'),
    container: document.querySelector('#surname-container'),
    errorText: null,
    errorElement: null,
  };

  const phone = {
    title: 'Phone',
    input: document.getElementById('phone'),
    container: document.querySelector('#phone-container'),
    errorText: null,
  };

  const email = {
    title: 'Email',
    input: document.getElementById('email'),
    container: document.querySelector('#email-container'),
    errorText: null,
  };

  const pass = {
    title: 'Password',
    input: document.getElementById('pass'),
    container: document.querySelector('#pass-container'),
    errorText: null,
  };

  // text type validation start
  const validateTextTypeInput = (el) => {
    const textTypeInput = el;

    const elementValue = textTypeInput.input.value.trim();

    if (elementValue === '') {
      textTypeInput.errorText = `Field ${textTypeInput.title.toLowerCase()} cannot be empty`;

      textTypeInput.errorElement = FUNC.createErrorElement(textTypeInput);
      textTypeInput.container.append(textTypeInput.errorElement);

      setTimeout(() => {
        textTypeInput.errorElement.remove();
      }, 2000);

      return false;
    }

    if (elementValue.length < 3) {
      textTypeInput.errorText = `${textTypeInput.title} must be minimum 3 characters`;

      const errorElement = FUNC.createErrorElement(textTypeInput);
      textTypeInput.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    if (elementValue.length >= 20) {
      textTypeInput.errorText = `${textTypeInput.title} must be less than 20 characters`;

      const errorElement = FUNC.createErrorElement(textTypeInput);
      textTypeInput.container.append(errorElement);

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
      phone.errorText = `${phone.title} format does not match`;

      const errorElement = FUNC.createErrorElement(phone);
      phone.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    return true;
  };

  isFieldsValid.push(validateTelTypeInput());
  // phone validation end

  // email validation start
  const validateEmailTypeInput = () => {
    const emailValue = email.input.value.trim();

    if (emailValue === '') {
      email.errorText = `Field ${email.title.toLowerCase()} cannot be empty`;

      const errorElement = FUNC.createErrorElement(email);
      email.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!regex.test(emailValue)) {
      email.errorText = `${email.title} format does not match`;

      const errorElement = FUNC.createErrorElement(email);
      email.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    return true;
  };

  isFieldsValid.push(validateEmailTypeInput());
  // email validation end

  // pass validation start
  const validatePasswordTypeInput = () => {
    const passValue = pass.input.value.trim();

    if (passValue === '') {
      pass.errorText = `Field ${pass.title.toLowerCase()} cannot be empty`;

      const errorElement = FUNC.createErrorElement(pass);
      pass.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (!regex.test(passValue)) {
      pass.errorText = `${pass.title} format does not match`;

      const errorElement = FUNC.createErrorElement(pass);
      pass.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    return true;
  };

  isFieldsValid.push(validatePasswordTypeInput());
  // pass validation end

  const isAllFieldsValid = isFieldsValid.every((fieldValid) => fieldValid === true);

  if (!isAllFieldsValid) {
    event.preventDefault();
  }
};

// name.input.onfocus = () => {
//   console.log('onfocus working');
//   name.errorElement.remove();
// };

const form = document.querySelector('.user-form');
form.addEventListener('submit', validateForm);
