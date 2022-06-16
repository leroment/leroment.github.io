var btn = $("#scrollbutton");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$("#about-menu").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top,
    },
    1000
  );
});

$("#work-experience-menu").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#work-experience").offset().top,
    },
    1000
  );
});

$("#contact-menu").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    1000
  );
});

$("#skills-menu").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#skills").offset().top,
    },
    1000
  );
});
