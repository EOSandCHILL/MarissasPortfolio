$(window).on("load", function () {
  $(".loader .inner").fadeOut(3000, function () {
    $(".loader").fadeOut(350);
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 6000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: [
      "I.T. Support",
      "Identity & Access Management",
      "Information Technology",
      "Web Development",
      "Technical Support",
      "Cyber Security",
      "Project Management",
    ],
    typeSpeed: 65,
    loop: true,
    startDelay: 300,
    showCursor: false,
  });

  $("#navigation li a").click(function (e) {
    e.preventDefault();
    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
