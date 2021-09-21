var editNav = function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}

var close_btn = document.getElementById("btn-close");
var on_click_close = function(e) {
  var f = document.getElementById("div-bground");
  f.style.display = "none";
}
close_btn.addEventListener("click", on_click_close);



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


