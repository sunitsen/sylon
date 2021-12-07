$(document).ready(function () {
  $(".videoplay").magnificPopup({
      type: "iframe",
      iframe: {
          markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

          patterns: {
              youtube: {
                  index: "youtube.com/", 

                  id: "v=", 

                  src: "https://www.youtube.com/embed/%id%?autoplay=1",
              },
              vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1",
              },
              gmaps: {
                  index: "//maps.google.",
                  src: "%id%&output=embed",
              },

          },

          srcAction: "iframe_src",
      },
  });
});
//---------------back-to-top-------------

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//------------main

  // const nextIcon = '<img src="/assets/img/next.svg" alt:"left">';
            const nextIcon = '<i class="fas fa-arrow-left catagoru-prev"></i>';

            // const prevIcon = '<img src="/assets/img/next.svg" alt:"right">';
            const prevIcon = '<i class="fas fa-arrow-right catagory-next"></i>';
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 5,
                autoplay: true,
                autoplayTimeout:4000,
                autoplayHoverPause: true,
                nav: true,
                navText: [nextIcon, prevIcon],
                responsive: {
                    0: {
                        items: 1.5,
                    },
                    300: {
                        items: 2.5,
                    },
                    600: {
                        items: 3.5,
                    },
                    1000: {
                        items: 4.5,
                    },
                },
            });







            // Link
$('.more_link').click(function() {
  $(".share").toggleClass("active");
  $(".link").toggleClass("active");
});

$('.share-btn.no-link').click(function() {
  $(".link").removeClass("active");
  $(".share").removeClass("active");
});

$('#share').click(function() {
  $(".fa-share").toggleClass("expanded");
});

// Dropdown
$('.dropdown-menu.share-menu').on("click.bs.dropdown", function(e) {
  e.stopPropagation();
  e.preventDefault();
});

$('#share').on('hide.bs.dropdown', function() {
  $(".link").removeClass("active");
  $(".share").removeClass("active");
  $(".fa-share").removeClass("expanded");
});

