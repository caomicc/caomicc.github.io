$(document).ready(function() {
  console.log("Hi, Developer! 👋");

  $(" .bye ").bind("click", manage_links);

});



function manage_links(a) {

  a.preventDefault(),
  url = $(this).attr("href"),
  $(".portfolio-right").removeClass("in").addClass("out"),
  $("#imageContainer").removeClass("up").addClass("down"),
   setTimeout(function() {window.location.href = url}, 1200)
}
