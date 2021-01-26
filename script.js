//Dom Elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPass = document.getElementById('password-2');

//Functions

//Error input handling outline
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Success input handling outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Valid Email
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); 
}

//Event Listener
form.addEventListener('submit', function(e) {
  e.preventDefault();  

  console.log(username.value);


if (username.value === '') {
  showError(username, 'Username is Required')
} else {
  showSuccess(username);
}
if (email.value === '') {
  showError(email, 'Email is Required')
} else if (!isValidEmail(email.value)) {
  showError(email, 'Please enter a valid Email')
} else {
  showSuccess(email);
}
if (password.value === '') {
  showError(password, 'Password is Required')
} else {
  showSuccess(password);
}
if (confPass.value === '') {
  showError(confPass, 'Please Re-enter your password')
} else {
  showSuccess(confPass);
}
});
