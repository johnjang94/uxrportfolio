// // FIRST BUTTON
// let call = document.getElementById("call");
// // FIRST BUTTON INFORMATION
// let info = document.getElementById("info");
// let number = document.getElementById("number");
// // FIRST BUTTON BACKGROUND
// let background = document.getElementById("image-container");
// // SECOND BUTTON
// let email = document.getElementById("email");

// // =========== FIRST BUTTON TOGGLING DETAIL ===============
// function expand() {
//   // CALL BUTTON TO BE INITIATED
//   call.classList.add("click");

//   // CALL BUTTON'S INITIAL BACKGROUND SIZE
//   background.style.width = "250px";
//   background.style.height = "174.03px";

//   // EMAIL BUTTON TO STAY
//   email.style.display = "inline";

//   // MORE DETAIL ABOUT CALL INFORMATION
//   info.style.display = "none";
//   number.style.display = "none";

//   setTimeout(function () {
//     // CALL BUTTON'S BACKGROUND TO APPEAR
//     background.style.display = "block";
//     background.style.backgroundColor = "#add8e6";
//     background.style.transition = "ease-in-out";

//     // MORE DETAIL ABOUT CALL INFORMATION
//     info.style.display = "inline";

//     number.style.display = "inline";
//     number.style.width = "150px";
//     number.style.marginLeft = "-150px";
//     number.style.marginTop = "70px";
//   }, 100);
// }

// function collapse() {
//   // CALL BUTTON TO BE INITIATED
//   call.classList.contains("click");
//   call.style.cursor = "pointer";

//   // MORE DETAIL ABOUT CALL INFORMATION - TO DISAPPEAR
//   info.style.display = "none";
//   number.style.display = "none";

//   // CALL BACKGROUND TO COLLAPSE
//   background.style.backgroundColor = "#FFFFFF";
//   background.style.transitionDuration = "0.5s";
//   background.style.transition = "ease-in-out;";

//   setTimeout(function () {
//     // EMAIL BUTTON TO APPEAR AGAIN
//     email.style.display = "block";

//     // CALL BUTTON TO APPEAR AGAIN
//     call.style.display = "block";
//   }, 100);
// }

// function toggleButton(id) {
//   console.log("call", id);
//   let call = document.getElementById(id);

//   if (!call.classList.contains("click")) {
//     expand(id);
//   } else {
//     collapse(id);
//   }
// }

//  ================== CHANGED TO A NEW BUTTON FUNCTION ===================
function toggleBox() {
  $("#box").slideToggle(500);
}

function toggleBox2() {
  $("#box2").slideToggle(500);
}
