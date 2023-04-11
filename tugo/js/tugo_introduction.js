// DESCRIPTIVE TAGS FOR THE FIRST PICTURE (Original GlassVU)
let image1 = document.getElementById("image1");
let name1 = document.getElementById("name1");
// == ONCE EXPANDED, THE DETAIL TO SHOW UP FOR THE FIRST PICTURE (Original GlassVU) ==
let message1 = document.getElementById("message1");
let box1 = document.getElementById("image-container1");
let closeBtn1 = document.getElementById("close-btn1");

// DESCRIPTIVE TAGS FOR THE SECOND PICTURE (Original ReportVU)
let image2 = document.getElementById("image2");
let name2 = document.getElementById("name2");
//  == ONCE EXPANDED, THE DETAIL TO SHOW UP FOR THE SECOND PICTURE (Original ReportVU) ==
let message2 = document.getElementById("message2");
let box2 = document.getElementById("image-container2");
let closeBtn2 = document.getElementById("close-btn2");

// DESCRIPTIVE TAGS FOR THE THIRD PICTURE (Original Video)
let image3 = document.getElementById("image3");
let name3 = document.getElementById("name3");
//  == ONCE EXPANDED, THE DETAIL TO SHOW UP FOR THE THIRD PICTURE (Original Video) ==
let message3 = document.getElementById("message3");
let box3 = document.getElementById("image-container3");
let closeBtn3 = document.getElementById("close-btn3");

// // =============== FUNCTIONS TO BE DONE ============================
// // <<<<<<<<<<<<<<< GlassVU PICTURE EXPANSION >>>>>>>>>>>>>>>>>>>>>>>
function expandImage() {
  // ORIGINAL GLASSVU (THE FIRST PICTURE) EXPAND FEATURE
  image1.classList.add("expanded");
  image1.style.transition = "ease-in-out";
  image1.style.transitionDuration = "1s";
  // ORIGINAL GLASSVU (THE FIRST PICTURE) EXPAND SIZE
  image1.style.width = "800px";
  image1.style.height = "auto";
  image1.style.marginLeft = "150px";

  // <<<<<<<<<<<<<<< THE BACKGROUND >>>>>>>>>>>>>>>>>
  // ORIGINAL GLASSVU (THE FIRST PICTURE) BACKGROUND SIZE
  box1.style.display = "box";
  box1.style.width = "1100px";
  box1.style.height = "auto";
  // ORIGINAL GLASSVU (THE FIRST PICTURE) BACKGROUND COLOUR
  box1.style.backgroundColor = "#FFFFFF";
  // ORIGINAL GLASSVU (THE FIRST PICTURE) BACKGROUND POSITION
  box1.style.marginLeft = "120px";
  box1.style.paddingLeft = "0px";

  // ORIGINAL GLASSVU (THE FIRST PICTURE) TAG TO DISAPPEAR
  name1.style.display = "none";

  // ORIGINAL GLASSVU (THE FIRST PICTURE) MESSAGE TO DISAPPEAR
  message1.style.display = "none";

  // CLOSE (X) BUTTON FOR ORIGINAL GLASSVU (THE FIRST PICTURE) TO DISAPPEAR
  closeBtn1.style.display = "none";

  // ORIGINAL REPORTVU TO DISAPPEAR
  // <<<<<< picture animation >>>>>>>
  image2.style.display = "none";
  image2.style.transition = "ease-in-out";
  image2.style.transitionDuration = "1s";
  // <<<<<< name tag animation >>>>>>>
  name2.style.display = "none";
  name2.style.transition = "ease-in-out";
  name2.style.transitionDuration = "1s";

  // ORIGINAL VIDEO TO DISAPPEAR
  // <<<<<< picture animation >>>>>>>
  image3.style.display = "none";
  image3.style.transition = "ease-in-out";
  image3.style.transitionDuration = "1s";
  // <<<<<< name tag animation >>>>>>>
  name3.style.display = "none";
  name3.style.transition = "ease-in-out";
  name3.style.transitionDuration = "1s";

  setTimeout(function () {
    // ORIGINAL GLASSVU (THE FIRST PICTURE) BACKGROUND SIZE - CHANGES
    box1.style.height = "600px";
    // ORIGINAL GLASSVU (THE FIRST PICTURE) BACKGROUND COLOUR - CHANGES
    box1.style.backgroundColor = "#FAFAFA";
    box1.style.transition = "ease-in-out";

    // CLOSE (X) BUTTON FOR ORIGINAL GLASSVU (THE FIRST PICTURE) TO APPEAR
    closeBtn1.style.display = "block";
    // CLOSE (X) BUTTON FOR ORIGINAL GLASSVU (THE FIRST PICTURE) POSITION
    closeBtn1.style.marginLeft = "730px";
    closeBtn1.style.marginTop = "-430px";
    closeBtn1.style.marginBottom = "600px";

    // ORIGINAL GLASSVU (THE FIRST PICTURE) MESSAGE TO APPEAR
    message1.style.display = "block";
    // ORIGINAL GLASSVU (THE FIRST PICTURE) MESSAGE TO APPEAR
    message1.style.width = "808px";
    // ORIGINAL GLASSVU (THE FIRST PICTURE) MESSAGE POSITION
    message1.style.position = "absolute";
    message1.style.marginTop = "-150px";
    message1.style.marginLeft = "150px";
  }, 1000);
}

function collapseImage() {
  // ORIGINAL GLASSVU (THE FIRST PICTURE) SHRINK FEATURE
  image1.classList.remove("expanded");
  image1.style.transition = "ease-in-out";
  image1.style.transitionDuration = "1s";

  // ORIGINAL GLASSVU (THE FIRST PICTURE) SHRINK FEATURE
  image1.style.width = "328px";
  image1.style.height = "217px";
  image1.style.marginTop = "-50px";
  image1.style.marginLeft = "140px";

  // ORIGINAL GLASSVU MESSAGE TO DISAPPEAR
  message1.style.display = "none";

  // ORIGINAL GLASSVU (THE FIRST PICTURE) BACKGROUND TO DISAPPEAR
  box1.style.backgroundColor = "#FFFFFF";
  box1.style.transition = "ease-in-out";
  box1.style.transitionDuration = "1s";
  box1.style.marginLeft = "0px";

  setTimeout(function () {
    // ORIGINAL GLASSVU (THE FIRST PICTURE) SHRINK FEATURE
    image1.style.position = "absolute";
    // image1.style.width = "328px";
    // image1.style.height = "217px";
    // image1.style.marginLeft = "110px";

    // ORIGINAL GLASSVU TAG TO APPEAR AGAIN
    name1.style.display = "inline";
    name1.style.marginLeft = "220px";

    // ORIGINAL REPORTVU PICTURE TO APPEAR AGAIN
    image2.style.display = "inline";
    image2.style.width = "400px";
    image2.style.height = "auto";
    // ORIGINAL REPORTVU PICTURE TAG TO APPEAR AGAIN
    name2.style.display = "inline";
    name2.style.marginTop = "-15px";
    name2.style.marginLeft = "240px";

    // ORIGINAL VIDEO PICTURE TO APPEAR AGAIN
    image3.style.display = "inline";
    image3.style.width = "400px";
    image3.style.height = "auto";
    // ORIGINAL VIDEO PICTURE TAG TO APPEAR AGAIN
    name3.style.display = "inline";
    name3.style.marginTop = "-15px";
    name3.style.marginLeft = "240px";
  }, 1000);
}

// TOGGLE FIRST PICTURE ON CLICK
function toggleImage(id) {
  console.log("image1", id);
  let image1 = document.getElementById(id);

  if (!image1.classList.contains("expanded")) {
    expandImage(id);
  } else {
    collapseImage(id);
  }
}

// // =============== ARCHIVED HISTORY ============================
// function expandImage1() {
//   // FIRST PICTURE (Original GlassVU) = HIDE THE DETAIL, THE CLOSE (X) BUTTON, AND THE NAME TAG
//   message1.style.display = "none";
//   closeBtn1.style.display = "none";
//   name1.style.display = "none";

//   // SECOND PICTURE (Original ReportVU) = HIDE THE PICTURE AND THE TAG
//   image2.style.display = "none";
//   name2.style.display = "none";

//   // THIRD PICTURE (Original Video) = HIDE THE PICTURE AND THE TAG
//   image3.style.display = "none";
//   name3.style.display = "none";

//   // ONCE THE FIRST PICTURE IS "CLICKED" TO BE EXPANDED, THE BIGGER PICTURE AND THE DETAIL SHOWS UP WITH THE CLOSE (X) BUTTON
//   // BIGGER FIRST PICTURE
//   image1.classList.add("expanded");
//   image1.style.marginTop = "30px";
//   image1.style.marginLeft = "30px";
//   image1.style.width = "900px";
//   image1.style.height = "550px";
//   image1.style.transition = "ease-in-out";
//   image1.style.transitionDuration = "1s";
//   // THE FIRST PICTURE'S BACKGROUND
//   box1.style.backgroundColor = "#FAFAFA";
//   box1.style.width = "970px";
//   box1.style.height = "720px";
//   box1.style.marginLeft = "120px";
//   box1.style.transition = "ease-in-out";
//   box1.style.transitionDuration = "1s";

//   // THE DETAIL FOR THE FIRST PICTURE AND THE CLOSE (X) BUTTON WILL ONLY SHOW ONCE THE PICTURE HAS BEEN COMPLETELY EXPANDED
//   setTimeout(function () {
//     message1.style.display = "block";
//     message1.style.marginLeft = "25px";
//     message1.style.marginBottom = "20px";

//     // Show close button after expanding the image
//     closeBtn1.style.display = "block";
//     closeBtn1.style.marginTop = "-700px";
//     closeBtn1.style.marginLeft = "610px";
//   }, 1000);
// }

// // =============== GlassVU PICTURE COLLAPSE =======================
// function collapseImage1() {
//   // HIDE THE FIRST PICTURE (GlassVU) DETAIL, ITS CLOSE (X) BUTTON, AND ITS TAG NAME
//   message1.style.display = "none";
//   closeBtn1.style.display = "none";
//   name1.style.display = "none";

//   // HIDE THE SECOND PICTURE AND ITS TAG NAME
//   image2.style.display = "none";
//   name2.style.display = "none";

//   // HIDE THE THIRD PICTURE AND ITS TAG NAME
//   image3.style.display = "none";
//   name3.style.display = "none";

//   // ONCE THE FIRST PICTURE IS "CLICKED" TO BE COLLAPSED, THE PICTURE SHOULD BE SMALL AND ITS TAG NAME SHOULD APPEAR
//   // SMALLER FIRST PICTURE
//   image1.classList.remove("expanded");
//   image1.style.width = "328px";
//   image1.style.height = "217px";
//   image1.style.marginTop = "0px";
//   image1.style.marginLeft = "0px";
//   image1.style.transition = "ease-in-out";
//   image1.style.transitionDuration = "1s";
//   // COLLAPSE THE BACKGROUND
//   box1.style.backgroundColor = "#FFFFFF";
//   box1.style.transition = "ease-in-out";
//   box1.style.transitionDuration = "1s";

//   // AFTER THE COLLAPSING ANIMATION, THE PICTURES AND ITS TAGS SHOULD ALL SHOW UP
//   setTimeout(function () {
//     // SHOW THE FIRST PICTURE AND ITS TAG NAME
//     image1.style.display = "inline";
//     name1.style.display = "inline";
//     name1.style.marginLeft = "119px";
//     // SHOW THE SECOND PICTURE AND ITS TAG NAME
//     image2.style.display = "inline";
//     image2.style.marginTop = "-720px";
//     name2.style.display = "inline";
//     name2.style.marginTop = "-490px";
//     // SHOW THE THIRD PICTURE AND ITS TAG NAME
//     image3.style.display = "inline";
//     image3.style.marginTop = "-720px";
//     name3.style.display = "inline";
//     name3.style.marginTop = "-490px";
//   }, 1000);
// }

// // TOGGLE FIRST PICTURE ON CLICK
// function toggleImage(id) {
//   console.log("id", id);
//   let image1 = document.getElementById(id);

//   if (!image1.classList.contains("expanded")) {
//     expandImage1(id);
//   } else {
//     collapseImage1(id);
//   }
// }
