const signUpButton = document.getElementById('signUpBtn');
const signInButton = document.getElementById('signInBtn');
const container = document.querySelector('.container');
const para = document.getElementById('para');

signUpButton.addEventListener('click', () => {
  document.querySelector(".sign-in-container").style.display = "none";
  document.querySelector(".overlay-right").style.display = "none";
  document.querySelector(".sign-up-container").style.display = "block";
  document.querySelector(".overlay-left").style.display = "block";
});

signInButton.addEventListener('click', () => {
  document.querySelector(".sign-in-container").style.display = "block";
  document.querySelector(".overlay-right").style.display = "block";
  document.querySelector(".sign-up-container").style.display = "none";
  document.querySelector(".overlay-left").style.display = "none";
});

const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;
  // Perform sign-in authentication
  console.log('Sign in:', email, password);
});

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signUpForm.querySelector('input[type="text"]').value;
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;
  // Perform sign-up authentication
  console.log('Sign up:', name, email, password);
});

const SignIn = document.querySelector(".SignIn");
const SignUp = document.querySelector(".SignUp");

SignIn.addEventListener('click', () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".overlay-container").style.display = "none";
  document.querySelector(".Moniter").style.display = "block";
});

SignUp.addEventListener('click', () => {
  alert('You Are Signed Up Successfully');
});


// Initialize the Monaco Editor
const codeEditor = monaco.editor.create(document.getElementById('codeEditor'), {
  value: `// Write your code here`,
  language: 'javascript',
  theme: 'vs-dark',
});

// Run code button click event handler
document.getElementById('runButton').addEventListener('click', () => {
  const code = codeEditor.getValue();
  const language = document.getElementById('languageSelect').value;
  
  // Execute the code (you need to implement this part)
  const output = executeCode(code, language);
  
  // Display the output
  document.getElementById('outputArea').textContent = output;
});

// Save sandbox button click event handler
document.getElementById('saveButton').addEventListener('click', () => {
  const code = codeEditor.getValue();
  const language = document.getElementById('languageSelect').value;
  
  // Save the sandbox (you need to implement this part)
  saveSandbox(code, language);
});