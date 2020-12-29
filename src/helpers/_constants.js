const INPUTS = [
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

export default INPUTS;
