let editNav = function() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Fermeture de la modale #1

/* Deux variables ont été déclarées : 
      - "close_btn" (qui correspond au bouton supérieur "x" de fermeture de la modale)
      - "close_modale" (qui ferme la modale).

  "close_modale" est une fonction qui fait disparaître la modale, 
  lorsqu'on clique sur le bouton "x". */

let close_btn = document.getElementById("btn-close");
let close_modale = function(e) {
  let modale = document.getElementById("div-bground");
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

/* La fonction "form_check" vérifie tous les champs du formulaire. 
    Une variable "valeur" est initialisée à "true". 
    Lorsque le champ n'est pas renseigné ou est mal renseigné, 
    la valeur "false" est assignée à cette variable.
*/

function form_check() {
  let valeur = true;

  // prénom -> au moins 2 caractères
  let firstname = document.getElementById("first");
  let error_firstname = document.querySelector(".error_first");

  if (firstname.value.length >= 2) {
    // console.log("First name is valid.");
    error_firstname.style.display = "none";
    // console.log("Border is black.")
    firstname.style.border = "1px solid black";
  } else {
    // console.log("First name is invalid.");
    error_firstname.style.display = "block";
    // console.log("Border is red.")
    firstname.style.border = "2px solid red";
    valeur = false;
  }

  // nom -> au moins 2 caractères
  let lastname = document.getElementById("last");
  let error_lastname = document.querySelector(".error_last");

  if (lastname.value.length >= 2) {
    // console.log("Last name is valid.");
    error_lastname.style.display = "none";
    // console.log("Border is black.")
    lastname.style.border = "1px solid black";
  } else {
    // console.log("Last name is invalid.");
    error_lastname.style.display = "block";
    // console.log("Border is red.")
    lastname.style.border = "2px solid red";
    valeur = false;
  }

  // email -> de la forme <nom>@<domaine>.<qqch>
  let emailAddress = document.getElementById("email");
  let error_emailAddress = document.querySelector(".error_email");

  function ValidateEmail(str) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
      return (true);
    }
    // console.log("Vous avez entré une adresse électronique invalide.");
    return (false);
  }

  if (ValidateEmail(emailAddress.value)) {
    // console.log("Email adress is valid.");
    error_emailAddress.style.display = "none";
    // console.log("Border is black.")
    emailAddress.style.border = "1px solid black";
  } else {
    // console.log("Email adress is invalid.");
    error_emailAddress.style.display = "block";
    // console.log("Border is red.")
    emailAddress.style.border = "2px solid red";

    valeur = false;
  }

  // date de naissance -> le participant doit avoir au moins 18 ans
  function ValidateBirthdate(birthdate) {
    // console.log(birthdate);
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
    // console.log("Birthdate is valid.");
    error_birthdate.style.display = "none";
    // console.log("Border is black.")
    birthDate.style.border = "1px solid black";
  } else {
    // console.log("Birthdate is invalid.");
    error_birthdate.style.display = "block";
    // console.log("Border is red.")
    birthDate.style.border = "2px solid red";
    valeur = false;
  }

  // Nombre de tournois -> ce doit être un nombre entier et le champ ne peut pas être laissé vide
  function ValidateQuantity(quantity) {
    let toNumber = parseInt(quantity, 10);
    // console.log(typeof quantity);

    let result ;

    if (isNaN(toNumber) || quantity % 1 != 0 || quantity == null) {
      result = false;
    } else {
      result = true;
    }
    return result;
  }

  let tournamentsQuantity = document.getElementById("quantity");
  let error_tournamentsQuantity = document.querySelector(".error_quantity");

  if (ValidateQuantity(tournamentsQuantity.value)) {
    // console.log("Number is valid.");
    error_tournamentsQuantity.style.display = "none";
    // console.log("Border is black.")
    tournamentsQuantity.style.border = "1px solid black";
  } else {
    // console.log("Number is invalid.");
    error_tournamentsQuantity.style.display = "block";
    // console.log("Border is red.")
    tournamentsQuantity.style.border = "2px solid red";
    valeur = false;
  }

  // Villes -> un seul bouton radio doit être sélectionné
  const towns = document.querySelectorAll('input[name="location"]');
  let error_town = document.querySelector(".error_town");

  function townCheck (t) {
    let result = true;
    for (let i = 0; i < t.length; i++) {
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

  // Checkbox "conditions" doit être cochée
  let conditions = document.getElementById("checkbox1");
  let error_conditions = document.querySelector(".error_conditions");
  
  if (conditions.checked) {
    // console.log("Conditions are valid.");
    error_conditions.style.display = "none";
  } else {
    // console.log("Conditions are invalid.");
    error_conditions.style.display = "block";
    valeur = false;
  }
  // console.log(valeur);
  return valeur;
}


// Soumission du formulaire et validation #4

/* Une fonction "form_validate" est définie. 
      SI la fonction "form_check" est vraie, 
      ALORS faire apparaître la div "confirm_submit",
            faire disparaître le formulaire,
            faire apparaître le bouton "fermer",
            déclencher l'évnt "fermeture de la modale" lorsqu'on clique sur le bouton "fermer".*/

/* Une variable "form_submit" est définie.
      Lorsque l'utilisateur clique sur le bouton "c'est parti" pour soumettre son formulaire,
      un évnt est déclenché qui exécute la fonction "form_validate". */

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


