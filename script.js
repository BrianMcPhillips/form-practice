//Dom Elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPass = document.getElementById('password-2');

//Functions
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
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
});
