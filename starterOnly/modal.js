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
// Ajout d'une validation ou de messages d'erreurs #3

/*
LORSQU'un champ du formulaire n'est pas bien rempli,
  faire apparaître la div <error_...> sous le champ.
   -> display: block

LORSQUE l'ensemble des champs du formulaire ont bien été remplis,
  faire apparaître la div <confirmation_envoi>
  et faire disparaître la div <modal-body>.
    -> display: none
*/
 
// Vérification du formulaire
function form_check() {

  //prenom
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

  //nom
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

  //email
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

  //date de naissance
  function ValidateBirthdate(birthdate) {
    console.log(birthdate);
    let error_birthdate = document.querySelector(".error_birthdate");
    let regexVar = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    let regexVarTest = regexVar.test(birthdate);
    let userBirthDate = new Date(birthdate);

    let todayYear = (new Date()).getFullYear();
    let cutOff18 = new Date();
    cutOff18.setFullYear(todayYear - 18); 
    let result = false;

    if (!regexVarTest) {
      error_birthdate.innerHTML = "Veuillez entrer votre date de naissance au format jj/mm/aaaa.";
    } else if (isNaN(userBirthDate)) {
      error_birthdate.innerHTML = "Date de naissance invalide. Veuillez vérifier votre année de naissance.";
    } else if (userBirthDate > cutOff18) {
      error_birthdate.innerHTML = "Vous devez avoir plus de 18 ans.";
    } else {
      error_birthdate.innerHTML = "";
      result = true;
    }
    return result;
  }

  let birthDate = document.getElementById("birthdate");
  let error_birthdate = document.querySelector(".error_birthdate");

  if (ValidateBirthdate(birthDate.value)) {
    console.log("Birthdate is valid.");
    error_birthdate.style.display = "none";
  } else {
    console.log("Birthdate is invalid.");
    error_birthdate.style.display = "block";
    valeur = false;
  }

  //nombre de tournois
  function ValidateQuantity(quantity) {
    let toNumber = parseInt(quantity, 10);
    console.log(typeof quantity);

    let error_tournamentsQuantity = document.querySelector(".error_quantity");
    let result = false;

    if (isNaN(toNumber) || toNumber % 1 != 0 || quantity == null) {
      error_tournamentsQuantity.style.display = "block";
    } else {
      error_tournamentsQuantity.style.display = "none";
      result = true;
    }
    return result;
  }

  let tournamentsQuantity = document.getElementById("quantity");
  let error_tournamentsQuantity = document.querySelector(".error_quantity");

  if (ValidateQuantity(tournamentsQuantity.value)) {
    console.log("Number is valid.");
    error_tournamentsQuantity.style.display = "none";
  } else {
    console.log("Number is invalid.");
    error_tournamentsQuantity.style.display = "block";
    valeur = false;
  }

  //villes
  const towns = document.querySelectorAll('input[name="location"]');
  let error_town = document.querySelector(".error_town");

  function townCheck (t) {
    let result = true;
    for (var i = 0; i < t.length; i++) {
      if (t[i].checked) {
        result = true;
        break;
      } else {
        result = false;  
      }
    }
    return result;
  }
 
  if (townCheck(towns) == true) {
    error_town.style.display = "none";
  } else {
    error_town.style.display = "block";
    valeur = false;
  }

  //conditions à remplir
  let conditions = document.getElementById("checkbox1");
  let error_conditions = document.querySelector(".error_conditions");
  
  
  if (conditions.checked) {
    console.log("Conditions are valid.");
    error_conditions.style.display = "none";
  } else {
    console.log("Conditions are invalid.");
    error_conditions.style.display = "block";
    valeur = false;
  }
  console.log(valeur);
  return valeur;
}

//Soumission du formulaire et validation #4

let form_submit = document.querySelector(".btn-submit");
form_submit.addEventListener("click", form_validate);

function form_validate(e) {
  let confirm_submit = document.getElementById("confirm_submit");
  e.preventDefault();

  if (form_check() == true) {
    let formulaire = document.querySelector("form");
    confirm_submit.style.display = "block";
    formulaire.style.display = "none";

    let fermer_btn = document.getElementById("submit2")
    fermer_btn.style.display = "block";

    fermer_btn.addEventListener("click", close_modale);
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


