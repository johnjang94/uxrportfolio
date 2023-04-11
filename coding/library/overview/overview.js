function expandImage() {
  let img = document.getElementById("overview1");
  let img2 = document.getElementById("overview2");
  let message = document.getElementById("message");
  let name = document.getElementById("glassvu");
  let name2 = document.getElementById("reportvu");
  let box = document.getElementById("image-container");
  let closeBtn = document.getElementById("close-btn");

  // Hide message before expanding the image
  message.style.display = "none";
  closeBtn.style.display = "none";

  // Show everything else before expanding the image
  box.style.backgroundColor = "#FAFAFA";
  box.style.width = "950px";
  box.style.height = "720px";
  box.style.marginLeft = "100px";
  box.style.transition = "ease-in-out";
  box.style.transitionDuration = "1s";
  name.style.display = "none";
  name2.style.display = "none";
  img.classList.add("expanded");
  img.style.marginTop = "20px";
  img.style.marginLeft = "25px";
  img.style.width = "900px";
  img.style.height = "550px";
  img.style.transition = "ease-in-out";
  img.style.transitionDuration = "1s";

  // Hide overview2 completely
  img2.style.display = "none";

  setTimeout(function () {
    message.style.display = "block";
    message.style.marginLeft = "25px";
    message.style.marginBottom = "20px";

    // Show close button after expanding the image
    closeBtn.style.display = "block";
    closeBtn.style.marginTop = "-700px";
    closeBtn.style.marginLeft = "600px";
  }, 1000);
}

function collapseImage() {
  let img = document.getElementById("overview1");
  let img2 = document.getElementById("overview2");
  let closeBtn = document.getElementById("close-btn");
  let box = document.getElementById("image-container");
  let message = document.getElementById("message");
  let name = document.getElementById("glassvu");
  let name2 = document.getElementById("reportvu");

  // hide overview2 and reportvu before collapsing the image
  img2.style.display = "none";
  name2.style.display = "none";
  closeBtn.style.display = "none";

  // hide glassvu before collapsing the image
  name.style.display = "none";

  img.classList.remove("expanded");
  img.style.width = "328px";
  img.style.height = "217px";
  img.style.marginLeft = "-100px";
  img.style.marginTop = "0px";
  img.style.transition = "ease-in-out";
  img.style.transitionDuration = "1s";

  box.style.backgroundColor = "#FFFFFF";
  box.style.transition = "ease-in-out";
  box.style.transitionDuration = "1s";
  message.style.display = "none";
  name.style.marginLeft = "3px";

  // Show overview2 and reportvu after collapsing the image
  setTimeout(function () {
    img2.style.display = "inline";
    img2.style.marginTop = "-720px";
    name2.style.display = "inline";
    name2.style.marginTop = "-490px";
    // Show glassvu after collapsing the image
    name.style.display = "inline";
  }, 1000);
}

function toggleImage() {
  let img = document.getElementById("overview1");

  if (!img.classList.contains("expanded")) {
    expandImage();
  } else {
    collapseImage();
  }
}
