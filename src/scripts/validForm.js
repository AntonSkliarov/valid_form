import FUNC from '../helpers/_functions';

const validateForm = (event) => {
  const isFieldsValid = [];
  const name = {
    input: document.getElementById('name'),
    container: document.querySelector('#name-container'),
    errorText: null,
  };

  const surname = {
    input: document.getElementById('surname'),
    container: document.querySelector('#surname-container'),
    errorText: null,
  };

  // name validation start
  const validateName = () => {
    const nameValue = name.input.value.trim();

    if (nameValue === '') {
      name.errorText = 'Field name cannot be empty';

      const errorElement = FUNC.createErrorElement(name);
      name.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    if (nameValue.length < 3) {
      name.errorText = 'Name must be minimum 3 characters';
      const errorElement = FUNC.createErrorElement(name);
      name.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    if (nameValue.length >= 20) {
      name.errorText = 'Name must be less than 20 characters';
      const errorElement = FUNC.createErrorElement(name);
      name.container.append(errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 2000);

      return false;
    }

    return true;
  };

  isFieldsValid.push(validateName());
  // name validation end

  const isAllFieldsValid = isFieldsValid.every((fieldValid) => fieldValid === true);

  if (!isAllFieldsValid) {
    event.preventDefault();
  }
};

const form = document.querySelector('.user-form');
form.addEventListener('submit', validateForm);
