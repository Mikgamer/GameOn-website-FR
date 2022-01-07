function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close"); // Button for closing the modal form
const modalCloseSubmitted = document.querySelector(".close-submitted"); // Button for closing the submitted modal form
const formData = document.querySelectorAll(".formData");
const footer = document.querySelector("footer");
const heroSection = document.querySelector(".hero-section");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);
modalCloseSubmitted.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  footer.className = "hideMobile"; // Class to hide footer if Modal is on mobile
  heroSection.classList.add("hideMobile");
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
  footer.className = "";
  heroSection.classList.remove("hideMobile");
}

// Set data attributes for style and message error of a formData
function setError(currentFormData, errorText) {
  currentFormData.setAttribute('data-error', errorText);
  currentFormData.setAttribute('data-error-visible', 'true');
}

// Unset data attributes for style and message error of a formData
function unsetError(currentFormData) {
  currentFormData.setAttribute('data-error', '');
  currentFormData.setAttribute('data-error-visible', '');
}

function validate(event) {
  // Prevent reloading the page by submitting the form with get method
  event.preventDefault();

  // Set value for each input
  const formFirst = document.getElementById("first"); // Get firstname input value
  const formLast = document.getElementById("last"); // Get lastname input value
  const formEmail = document.getElementById("email"); // Get email input value
  const formBirthdate = document.getElementById("birthdate"); // Get birthdate input value
  const formQuantity = document.getElementById("quantity"); // Get the number of tournaments done input value
  const formRadio = document.querySelectorAll('input[name="location"]:checked'); // Get checked tournaments radio inputs
  const formCheckbox1 = document.getElementById("checkbox1"); // Get term of service input value

  // Set a value to know if the form is valid and avoid returning false at each if
  var isValid = true;

  if (!formFirst.validity.valid)     {
    setError(formFirst.parentNode, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    isValid = false;
  } else { unsetError(formFirst.parentNode); }

  if (!formLast.validity.valid)      {
    setError(formLast.parentNode, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    isValid = false;
  } else { unsetError(formLast.parentNode); }

  if (!formEmail.validity.valid)     { 
    setError(formEmail.parentNode, 'Vérifiez que vottre email soit valide');
    isValid = false;
  } else { unsetError(formEmail.parentNode); }

  if (!formBirthdate.validity.valid) { 
    setError(formBirthdate.parentNode, 'Vous devez entrer votre date de naissance.');
    isValid = false;
  } else { unsetError(formBirthdate.parentNode); }

  if (!formQuantity.validity.valid)  { 
    setError(formQuantity.parentNode, 'Sélectionnez un nombre');
    isValid = false;
  } else { unsetError(formQuantity.parentNode); }

  // If no tournament are selected, there is an error
  if(formRadio.length<1)    {
    setError(document.querySelector('input[name="location"]').parentNode, 'Vous devez choisir une option.');
    isValid = false;
  } else { unsetError(document.querySelector('input[name="location"]').parentNode); }

  if (!formCheckbox1.validity.valid)  { 
    setError(formCheckbox1.parentNode, 'Vous devez vérifier que vous acceptez les termes et conditions.');
    isValid = false;
  } else { unsetError(formCheckbox1.parentNode); }

  if (isValid) {
    // Show successfull validation message
    document.querySelector("form[name=reserve]").className += " submitted";
    modalCloseSubmitted.style.display = "block";
    document.querySelector(".message-submitted").style.display = "block";
  }

  // If there is no error, return true
  return isValid;
}

