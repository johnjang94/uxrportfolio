// Menu toggle
function toggleMenu() {
  let navbar = document.getElementById("navbar");
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}

// Video player
$(document).ready(function () {
  var ctrlVideo = document.getElementById("video");

  $("button").click(function () {
    if ($("button").hasClass("active")) {
      ctrlVideo.play();

      $("button").html("Pause");
      $("button").toggleClass("active");
    } else {
      ctrlVideo.pause();

      $("button").html("play");
      $("button").toggleClass("active");
    }
  });
});

var $container = $("#video1");
var $video = $container.children("video"),
  video = $video[0];
var $controls = $container.children(".controls");
var $play = $controls.children("button");

// control visibility
$container.on("mouseover mouseout", function (e) {
  $controls.css(
    "display",
    e.type === "mouseout" && video.paused ? "none" : "block"
  );
});

// play or pause
$play.on("click", toggle);
$video.on("click", toggle);

function toggle() {
  video[video.paused ? "play" : "pause"]();
}

// todo: cover more events (seeked, error etc.)
$video.on("play pause ended", updateUI);

// update control UI elements (todo: update time/progress etc.)
function updateUI() {
  $play.text(video.paused ? "Play" : "Pause");
}
