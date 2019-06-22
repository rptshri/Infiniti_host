console.log("Connected");
sal();
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".topButton").addClass("buttonDisplay");
    } else {
      $(".topButton").removeClass("buttonDisplay");
    }

    if ($(this).scrollTop() > 250) {
      $(".navbar").addClass("solid");
      $(".navbar").css("background-color: #000;");
    } else {
      $(".navbar").removeClass("solid");
    }
  });
});

$(function() {
  $("#typeeffect").typed({
    strings: ["Design and Manufacturing", "Products", "Training"],
    typeSpeed: 300,
    backDelay: 650,
    loop: true
  });
});
