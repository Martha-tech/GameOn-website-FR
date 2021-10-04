var editNav = function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}

// Fermeture de la modale #1
var close_btn = document.getElementById("btn-close");
var close_modale = function(e) {
  var modale = document.getElementById("div-bground");
  modale.style.display = "none";
}
close_btn.addEventListener("click", close_modale);

// Implémentation des entrées du formulaire #2
/*
LORSQU'un champ du formulaire n'est pas bien rempli,
  faire apparaître la div <error_...> sous le champ.
   -> display: block ou inline-block

LORSQUE l'ensemble des champs du formulaire ont bien été remplis,
  faire apparaître la div <confirmation_envoi>
  et faire disparaître la div <modal-body>.
    -> display: none
*/

/*var firstname = document.getElementById("first");
var lastname = document.getElementById("last");
var emailAddress = document.getElementById("email");
var birthDate = document.getElementById("birthdate");
var quantity = document.getElementById("quantity");
var town = document.querySelectorAll('input[name="location"]');
var conditions = document.getElementById("checkbox1");
var form_submit = document.getElementById("submit1");
var confirm_submit = document.getElementById("confirmation_envoi");
var formulaire = document.getElementById("form");

var error_firstname = document.querySelector(".error_first");
var error_lastname = document.querySelector(".error_last");
var error_emailAddress = document.querySelector(".error_email");
var error_birthdate = document.querySelector(".error_birthdate");
var error_quantity = document.querySelector(".error_quantity");
var error_town = document.querySelector(".error_town");
var error_conditions = document.querySelector(".error_conditions");*/



function form_check() {
  let firstname = document.getElementById("first");
  let error_firstname = document.querySelector(".error_first");
  let valeur = true;

  if (firstname.value.length >= 2) {
    console.log("First name is valid.");
    error_firstname.style.display = "none";
  } else {
    console.log("First name is invalid.");
    error_firstname.style.display = "block";
    valeur = false;
  }


  let lastname = document.getElementById("last");
  let error_lastname = document.querySelector(".error_last");

  if (lastname.value.length >= 2) {
    console.log("Last name is valid.");
    error_lastname.style.display = "none"; 
  } else {
    console.log("Last name is invalid.");
    error_lastname.style.display = "block";
    valeur = false;
  }


  let emailAddress = document.getElementById("email");
  let error_emailAddress = document.querySelector(".error_email");

  function ValidateEmail(str) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
      return (true);
    }
    console.log("Vous avez entré une adresse électronique invalide.");
    return (false);
  }

  if (ValidateEmail(emailAddress.value)) {
    console.log("Email adress is valid.");
    error_emailAddress.style.display = "none";
  } else {
    console.log("Email adress is invalid.");
    error_emailAddress.style.display = "block";
    valeur = false;
  }


  let birthDate = document.getElementById("birthdate");
  let error_birthdate = document.querySelector(".error_birthdate");

  if (birthDate.value) {
    console.log("Birthdate is valid.");
    error_birthdate.style.display = "none";
  } else {
    console.log("Birthdate is invalid.");
    error_birthdate.style.display = "block";
    valeur = false;
  }


  let quantity = document.getElementById("quantity");
  let error_quantity = document.querySelector(".error_quantity");

  if (quantity.value >= 0 && quantity.value <= 10) {
    console.log("Number is valid.");
    error_quantity.style.display = "none";
  } else {
    console.log("Number is invalid.");
    error_quantity.style.display = "block";
    valeur = false;
  }
  return valeur;
}

let conditions = document.getElementById("checkbox1");
let error_conditions = document.querySelector(".error_conditions");

function isChecked(elem) {
  return document.getElementById(elem).checked == true;
}

if (isChecked("checkbox1") == true) {
  console.log("Conditions are valid.");
  error_conditions.style.display = "none";
} else {
  console.log("Conditions are invalid.");
  error_conditions.style.display = "block";
}



var form_submit = document.querySelector(".btn-submit");
form_submit.addEventListener("click", form_validate);

function form_validate(e) {
  var confirm_submit = document.getElementById("confirmation_envoi");
  e.preventDefault();

  
  if (form_check() == true) {
    confirm_submit.style.display="block";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


