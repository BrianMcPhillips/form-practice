//Dom Elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPass = document.getElementById('password-2');

//Functions

//Error input handling
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Success input handling
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
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
