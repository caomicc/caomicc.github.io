$(document).ready(function() {
  console.log("Hi developer! 👋🏻");
  $("#menu-toggle").on("click", function() {
    $("nav .nav-items, nav, #menu-toggle").toggleClass("open");
  });

  var controller = new ScrollMagic.Controller,
    scene = new ScrollMagic.Scene({
      triggerElement: "#home",
      duration: "100%"
    }).setClassToggle("#nav1", "active").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: .9,
      duration: "100%"
    }).setClassToggle("#nav2", "active").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#work",
      triggerHook: 1,
      duration: $("#work .row").height() - 300
    }).setClassToggle("#nav3", "active").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#footer",
      triggerHook: .9
    }).setClassToggle("#nav4", "active").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: .5
    }).setClassToggle("#animate", "fadeUp").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#about"
    }).setClassToggle("#animate-two", "fadeUp").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerHook: .4,
      triggerElement: "#about"
    }).setClassToggle("#hand", "tada").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#grid-trigger",
      triggerHook: .5
    }).setClassToggle("#colleton", "fadeUp").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#grid-trigger",
      triggerHook: .45
    }).setClassToggle("#manch", "fadeUp").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#manch",
      offset: 60,
      triggerHook: .3
    }).setClassToggle("#cal", "fadeUp").addTo(controller),
    scene = new ScrollMagic.Scene({
      triggerElement: "#cal",
      offset: 60,
      triggerHook: .3
    }).setClassToggle("#realestate", "fadeUp").addTo(controller)

  // particlesJS.load('particles', 'node_modules/particles.js-master/particles.json', function() {});
  $("#project-1").animatedModal({
    modalTarget: 'project-1-modal',
    animatedIn: 'fadeInUp',
    animatedOut: 'fadeOutDown',
    color: '#ffffff',
    animationDuration: '.8s',
  });

  //demo 02
  $("#project-2").animatedModal({
    modalTarget: 'project-2-modal',
    animatedIn: 'fadeInUp',
    animatedOut: 'fadeOutDown',
    color: '#ffffff',
    animationDuration: '.8s',
  });

  $("#project-3").animatedModal({
    modalTarget: 'project-3-modal',
    animatedIn: 'fadeInUp',
    animatedOut: 'fadeOutDown',
    color: '#ffffff',
    animationDuration: '.8s',
  });

  $("#project-4").animatedModal({
    modalTarget: 'project-4-modal',
    animatedIn: 'fadeInUp',
    animatedOut: 'fadeOutDown',
    color: '#ffffff',
    animationDuration: '.8s',
  });

  $('a[href*="#"]:not([href="#"], [href*="-modal"])').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function() {
      window.location.hash = target;
    });
  });

  resizeGrid()

  $("#js-rotating").Morphext({
    animation: "fadeInDown",
    separator: ",",
    speed: 7000,
    complete: function() {}
  });
});
$(window).on('resize', resizeGrid)
$(window).load(function() {
  $('html').animate({
    scrollTop: 0
  }, 1);
  $('body').animate({
    scrollTop: 0
  }, 1);
  $("#cage").delay(1500).animate({
      opacity: 1
    }, 1e3),
    $("#preloader").delay(1500).fadeOut(900, function() {
      $('body').removeClass('loading');
    });
});

function resizeGrid() {
  $('#work .grid-item').css("height", "");
  var startHeight = $('#work .grid-item:nth-of-type(2)').outerHeight();
  var startWidth = $('#work .grid-item:nth-of-type(2)').outerWidth();
  var doubleHeight = startHeight * 2;
  var doubleWidth = startWidth * 2;
  $('#work .grid-item').css("height", startHeight);
  $('#work .grid-item:nth-of-type(4)').css("height", startHeight * 2);
  $('#work .grid-item:nth-of-type(1)').css("width", "100%");
}
