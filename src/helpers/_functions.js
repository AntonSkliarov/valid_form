const FUNC = {
  createErrorElement: (elementName) => {
    const errorElement = document.createElement('p');
    errorElement.innerHTML = elementName.errorText;
    errorElement.setAttribute('class', 'error');

    return errorElement;
  },
};

export default FUNC;
