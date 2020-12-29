const FUNC = {
  createErrorElement: (elementName) => {
    const errorElement = document.createElement('p');
    errorElement.innerHTML = elementName.errorText;
    errorElement.setAttribute('class', 'error');

    return errorElement;
  },
  setNotValid: (el, inputs) => {
    const element = el;

    element.isValid = false;
    const isAllFieldsValid = inputs.every((input) => input.isValid === true);

    return isAllFieldsValid;
  },

  appendError: (el) => {
    const element = el;

    element.errorElement = FUNC.createErrorElement(element);
    element.container.append(element.errorElement);
  },
};

export default FUNC;
