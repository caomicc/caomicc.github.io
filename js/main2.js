$(document).ready(function() {
  console.log("Hi, Developer! 👋");

  $(" .bye ").bind("click", manage_links);

// 
//   $("#typeOut").typed({
//    // strings: [
//    //   "This is simply a copy of Typed.js I wanted to create for myself",
//    // ],
//    strings: [".opener"],
//    // The lower the faster, the higher the slower
//    startDelay: 1000,
//    typeSpeed: -10,
//    cursorChar: "|",
//    // backSpeed: -100,
//    // backSpeedDelay: 50,
//    // backDelay: 500,
//    // loop: false,
//    contentType: 'html', // or text
//    // loopCount: false // defaults to false for infinite loop
//    // onStringTyped: function() { self.stop(); },
// });


});



function manage_links(a) {

  a.preventDefault(),
  url = $(this).attr("href"),
  $(".portfolio-right").removeClass("in").addClass("out"),
  $("#imageContainer").removeClass("up").addClass("down"),
   setTimeout(function() {window.location.href = url}, 1200)
}
