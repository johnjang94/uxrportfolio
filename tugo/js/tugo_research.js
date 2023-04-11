// ======== MORE INFORMATION DETAIL IN POP-UP WINDOWS ==========
// Get the button that opens the modal
let btn = document.querySelectorAll("button.modal-button");

// All page modals
let modals = document.querySelectorAll(".modal");

// Get the <span> element that closes the modal
let spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (let index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    for (let index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};

// ================= USER PERSONAL & USER JOURNEY MAP ==================
// ===== // FIRST ATTEMPT FOR USER PERSONA
//  User Persona
let persona = document.getElementById("persona");
let tag = document.getElementById("personaTag");

// User Journey Map
let journey = document.getElementById("journey");
let tag2 = document.getElementById("tag2");

function expandImage() {
  // PERSONA PICTURE EXPAND FEATURE
  persona.classList.add("expanded");
  persona.style.transition = "ease-in-out";
  persona.style.transitionDuration = "1s";

  persona.style.width = "800px";
  persona.style.height = "auto";
  persona.style.marginLeft = "251px";
  persona.style.marginTop = "82px";

  // PERSONA PICTURE TAG TO DISAPPEAR
  tag.style.display = "none";

  // USER JOURNEY MAP TO DISAPPEAR
  journey.style.display = "none";
  tag2.style.display = "none";
}

function collapseImage() {
  // PERSONA PICTURE TO SHRINK
  persona.classList.remove("expanded");
  persona.style.transition = "ease-in-out";
  persona.style.transitionDuration = "1s";

  // PERSONA PICTURE TO SHRINK
  persona.style.width = "400px";
  persona.style.height = "auto";
  persona.style.marginLeft = "251px";
  persona.style.marginTop = "82px";

  setTimeout(function () {
    // PERSONA TAG TO APPEAR AGAIN
    tag.style.display = "inline";
    tag.style.marginLeft = "410px";

    // USER JOURNEY MAP PICTURE TO APPEAR AGAIN
    journey.style.display = "inline";
    journey.style.width = "400px";
    journey.style.height = "auto";

    // USER JOURNEY MAP TAG TO APPEAR AGAIN
    tag2.style.display = "inline";
    tag2.style.marginTop = "-15px";
    tag2.style.marginLeft = "790px";
  }, 1000);
}

// TOGGLE FIRST PICTURE ON CLICK
function toggleImage(id) {
  console.log("persona", id);
  let persona = document.getElementById(id);

  if (!persona.classList.contains("expanded")) {
    expandImage(id);
  } else {
    collapseImage(id);
  }
}

// ===== // SECOND ATTEMPT FOR USER JOURNEY MAP (REFERENCE NOTE BELOW)
// //  User Persona
// let persona = document.getElementById("persona");
// let tag = document.getElementById("personaTag");

// // User Journey Map
// let journey = document.getElementById("journey");
// let tag2 = document.getElementById("tag2");

function expandImage2() {
  // USER JOURNEY MAP PICTURE EXPAND TIME
  journey.classList.add("expanded");
  journey.style.transition = "ease-in-out";
  journey.style.transitionDuration = "1s";
  // USER JOURNEY MAP PICTURE EXPAND FEATURE
  journey.style.width = "800px";
  journey.style.height = "auto";
  journey.style.marginLeft = "251px";
  journey.style.marginTop = "82px";
  // USER JOURNEY MAP PICTURE EXPAND POSITION
  journey.style.position = "relative";
  // USER JOURNEY MAP ANIMATION START POINT
  journey.style.transformOrigin = "right";

  // USER JOURNEY MAP PICTURE TAG TO DISAPPEAR
  tag2.style.display = "none";

  // USER PERSONA TO DISAPPEAR
  persona.style.display = "none";
  tag.style.display = "none";
}

function collapseImage2() {
  // USER JOURNEY MAP PICTURE SHRINK TIME
  journey.classList.remove("expanded");
  journey.style.transition = "ease-in-out";
  journey.style.transitionDuration = "1s";

  // USER JOURNEY MAP PICTURE SHRINK FEATURE
  journey.style.width = "400px";
  journey.style.height = "auto";
  journey.style.marginLeft = "150px";
  journey.style.marginTop = "-285px";

  setTimeout(function () {
    // USER JOURNEY MAP PICTURE SHRINK POSITION
    journey.style.position = "absolute";
    // USER JOURNEY MAP PICTURE STATE AFTER THE SHRINK ANIMATION
    journey.style.width = "400px";
    journey.style.height = "auto";
    journey.style.marginLeft = "150px";
    journey.style.marginTop = "-285px";

    // USER JOURNEY MAP TAG TO APPEAR AGAIN
    tag2.style.display = "inline";
    tag2.style.marginTop = "-15px";
    tag2.style.marginLeft = "790px";

    // PERSONA PICTURE TO APPEAR AGAIN
    persona.style.display = "inline";
    persona.style.width = "400px";
    persona.style.height = "auto";

    // PERSONA TAG TO APPEAR AGAIN
    tag.style.display = "inline";
    tag.style.marginLeft = "410px";
  }, 1000);
}

// TOGGLE FIRST PICTURE ON CLICK
function toggleImage2(id) {
  console.log("journey", id);
  let journey = document.getElementById(id);

  if (!journey.classList.contains("expanded")) {
    expandImage2(id);
  } else {
    collapseImage2(id);
  }
}
