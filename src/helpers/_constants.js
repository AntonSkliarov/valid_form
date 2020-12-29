export const INPUTS = [
  {
    title: 'Name',
    type: 'text',
    input: document.getElementById('name'),
    container: document.querySelector('#name-container'),
    errorText: null,
    errorElement: null,
    isValid: false,
  },
  {
    title: 'Surname',
    type: 'text',
    input: document.getElementById('surname'),
    container: document.querySelector('#surname-container'),
    errorText: null,
    errorElement: null,
    isValid: false,
  },
  {
    title: 'Phone',
    type: 'tel',
    input: document.getElementById('phone'),
    container: document.querySelector('#phone-container'),
    errorText: null,
    errorElement: null,
    isValid: false,
  },
  {
    title: 'Email',
    type: 'email',
    input: document.getElementById('email'),
    container: document.querySelector('#email-container'),
    errorText: null,
    errorElement: null,
    isValid: false,
  },
  {
    title: 'Password',
    type: 'password',
    input: document.getElementById('pass'),
    container: document.querySelector('#pass-container'),
    errorText: null,
    errorElement: null,
    isValid: false,
  },
];

export const DOM = {
  form: document.querySelector('.user-form'),
};

export const INPUT_TYPES = {
  text: 'text',
  phone: 'tel',
  email: 'email',
  pass: 'password',
};

export const TEXT_LENGTH = {
  min: 3,
  max: 20,
};

export const REGEX = {
  email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  phone: /^\+38\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/,
  pass: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
};
