let loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', (e) => {
 e.preventDefault();

 // handle submit

 let userName = document.getElementById('contact-name');
 let userEmail = document.getElementById('contact-email');
 let userMessage = document.getElementById('contact-message');

 if (userName.value === '' || userEmail.value === '' || userMessage.value === '') {
 alert("Ensure you input a value in field!");
 }
  else{
  // perform operation with form input
  alert("This form has been successfully submitted!");

  // userName.value = "";
  // userEmail.value = "";
  // userMessage.value = "";
 }
});

