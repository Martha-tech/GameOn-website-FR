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

var nom = document.getElementById("last");
var courriel = document.getElementById("email");
var date_naissance = document.getElementById("birthdate");
var quantite = document.getElementById("quantity");
var location = document.querySelectorAll('input[name="location"]');
var submit_form = document.getElementsByClassName("btn-submit");


/*var prenom_valide = function(e) {
  var prenom = document.getElementById("first");
  if (prenom.length >= 2) {
    return true;
  } else {
    window.alert("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  };
}
prenom.addEventListener("cli???ck", prenom_valide);

var nom_valide = function(e) {
  if (e.length >= 2) {
    return true;
  } else {
    window.alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  };
}*/


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


