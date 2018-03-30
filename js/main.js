$(document).ready(function() {
  console.log("Hi developer! 👋🏻");
  $("#menu-toggle").on("click", function() {
    $("nav .nav-items, nav, #menu-toggle").toggleClass("open");
  });

  var controller = new ScrollMagic.Controller,

    // NOTE: diff between two below is .5 seconds, same trigger point just tranistion delay
    scene = new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: .5
    }).setClassToggle("#animate", "fadeUp")
    .addTo(controller),

    scene = new ScrollMagic.Scene({
      triggerElement: "#about"
    }).setClassToggle("#animate-two", "fadeUp")
    .addTo(controller),


    // NOTE: TADA!
    scene = new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: "#about"
    }).setClassToggle("#hand", "tada")
    .addTo(controller),

    scene = new ScrollMagic.Scene({
      triggerElement: "#grid-trigger",
      triggerHook: .5
    }).setClassToggle("#item_one", "fadeUp").addTo(controller),

    scene = new ScrollMagic.Scene({
      triggerElement: "#grid-trigger",
      triggerHook: .40
    }).setClassToggle("#item_two", "fadeUp").addTo(controller),

    scene = new ScrollMagic.Scene({
      triggerElement: "#item_two",
      offset: 60,
      triggerHook: .3
    }).setClassToggle("#item_three", "fadeUp").addTo(controller),

    scene = new ScrollMagic.Scene({
      triggerElement: "#item_two",
      offset: 60,
      triggerHook: .2
    }).setClassToggle("#item_four", "fadeUp").addTo(controller)

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

  $("#js-rotating").Morphext({
    animation: "fadeInDown",
    separator: ",",
    speed: 7000,
    complete: function() {}
  });
});

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
