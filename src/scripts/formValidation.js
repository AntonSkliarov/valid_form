import FUNC from '../helpers/_functions';
import {
  INPUTS,
  DOM,
  INPUT_TYPES,
  TEXT_LENGTH,
  REGEX,
} from '../helpers/_constants';

let isAllFieldsValid = false;

const inputValidation = (element) => {
  const formElement = element;

  formElement.input.onfocus = () => {
    if (formElement.errorElement) {
      formElement.errorElement.remove();

      isAllFieldsValid = FUNC.setNotValid(formElement, INPUTS);
    }
  };

  formElement.input.onblur = () => {
    const inputValue = formElement.input.value.trim();

    if (inputValue === '') {
      formElement.errorText = `Field ${formElement.title.toLowerCase()} cannot be empty`;

      FUNC.appendError(formElement);

      isAllFieldsValid = FUNC.setNotValid(formElement, INPUTS);

      return;
    }

    if (formElement.type === INPUT_TYPES.text) {
      if (inputValue.length < TEXT_LENGTH.min) {
        formElement.errorText = `${formElement.title} must be minimum 3 characters`;

        FUNC.appendError(formElement);

        isAllFieldsValid = FUNC.setNotValid(formElement, INPUTS);

        return;
      }

      if (inputValue.length >= TEXT_LENGTH.max) {
        formElement.errorText = `${formElement.title} must be less than 20 characters`;

        FUNC.appendError(formElement);

        isAllFieldsValid = FUNC.setNotValid(formElement, INPUTS);

        return;
      }
    }

    if (formElement.type === INPUT_TYPES.email) {
      if (!REGEX.email.test(inputValue)) {
        formElement.errorText = `${formElement.title} format does not match`;

        FUNC.appendError(formElement);

        isAllFieldsValid = FUNC.setNotValid(formElement, INPUTS);

        return;
      }
    }

    if (formElement.type === INPUT_TYPES.phone) {
      if (!REGEX.phone.test(inputValue)) {
        formElement.errorText = `${formElement.title} format does not match`;

        FUNC.appendError(formElement);

        isAllFieldsValid = FUNC.setNotValid(formElement, INPUTS);

        return;
      }
    }

    if (formElement.type === INPUT_TYPES.pass) {
      if (!REGEX.pass.test(inputValue)) {
        formElement.errorText = `${formElement.title} format does not match`;

        FUNC.appendError(formElement);

        isAllFieldsValid = FUNC.setNotValid(formElement, INPUTS);

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

DOM.form.addEventListener('submit', (event) => {
  if (!isAllFieldsValid) {
    event.preventDefault();
  }
});
