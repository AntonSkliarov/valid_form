import FUNC from '../helpers/_functions';
import INPUTS from '../helpers/_constants';

let isAllFieldsValid = false;

const inputValidation = (element) => {
  const formElement = element;

  formElement.input.onfocus = () => {
    if (formElement.errorElement) {
      formElement.errorElement.remove();

      formElement.isValid = false;
      isAllFieldsValid = INPUTS.every((input) => input.isValid === true);
    }
  };

  formElement.input.onblur = () => {
    const inputValue = formElement.input.value.trim();

    if (inputValue === '') {
      formElement.errorText = `Field ${formElement.title.toLowerCase()} cannot be empty`;
      formElement.errorElement = FUNC.createErrorElement(formElement);
      formElement.container.append(formElement.errorElement);

      formElement.isValid = false;
      isAllFieldsValid = INPUTS.every((input) => input.isValid === true);

      return;
    }

    if (formElement.type === 'text') {
      if (inputValue.length < 3) {
        formElement.errorText = `${formElement.title} must be minimum 3 characters`;
        formElement.errorElement = FUNC.createErrorElement(formElement);
        formElement.container.append(formElement.errorElement);

        formElement.isValid = false;
        isAllFieldsValid = INPUTS.every((input) => input.isValid === true);

        return;
      }

      if (inputValue.length >= 20) {
        formElement.errorText = `${formElement.title} must be less than 20 characters`;
        formElement.errorElement = FUNC.createErrorElement(formElement);
        formElement.container.append(formElement.errorElement);

        formElement.isValid = false;
        isAllFieldsValid = INPUTS.every((input) => input.isValid === true);

        return;
      }
    }

    if (formElement.type === 'email') {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      if (!regex.test(inputValue)) {
        formElement.errorText = `${formElement.title} format does not match`;
        formElement.errorElement = FUNC.createErrorElement(formElement);
        formElement.container.append(formElement.errorElement);

        formElement.isValid = false;
        isAllFieldsValid = INPUTS.every((input) => input.isValid === true);

        return;
      }
    }

    if (formElement.type === 'tel') {
      const regex = /^\+38\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/;

      if (!regex.test(inputValue)) {
        formElement.errorText = `${formElement.title} format does not match`;
        formElement.errorElement = FUNC.createErrorElement(formElement);
        formElement.container.append(formElement.errorElement);

        formElement.isValid = false;
        isAllFieldsValid = INPUTS.every((input) => input.isValid === true);

        return;
      }
    }

    if (formElement.type === 'password') {
      const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

      if (!regex.test(inputValue)) {
        formElement.errorText = `${formElement.title} format does not match`;
        formElement.errorElement = FUNC.createErrorElement(formElement);
        formElement.container.append(formElement.errorElement);

        formElement.isValid = false;
        isAllFieldsValid = INPUTS.every((input) => input.isValid === true);

        return;
      }
    }

    formElement.isValid = true;

    isAllFieldsValid = INPUTS.every((input) => input.isValid === true);
  };
};

const formValidation = () => {
  INPUTS.map((input) => inputValidation(input));
};

formValidation();

const form = document.querySelector('.user-form');
form.addEventListener('submit', (event) => {
  if (!isAllFieldsValid) {
    event.preventDefault();
  }
});
