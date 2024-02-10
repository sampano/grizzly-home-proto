$(document).ready(function () {
  $("#testimonial-first").slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 4,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          infinite: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          cssEase: "linear",
        },
      },
    ],
  });
  $("#testimonial-second").slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          infinite: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          cssEase: "linear",
        },
      },
    ],
  });
});

$(document).on("click", ".read-more-link", function () {
  var $contentToggle = $(this).closest(".content-toggle");
  var $readMoreText = $contentToggle.find(".read-more-text");
  var $threedots = $contentToggle.find(".three-dots");
  var isActive = $(this).hasClass("active");
  var readIcon = $(".readmore__toggle");
  $readMoreText.slideToggle();
  $threedots.toggle();
  $(this)
    .toggleClass("active", !isActive)
    .text(isActive ? "Read more" : " Read less");
});

// const year = (document.querySelector('.year').textContent =
//   new Date().getFullYear());
$(".year").text(
  "© Grizzly Elite - All Rights Reserved " + new Date().getFullYear()
);

$(document).ready(function () {
  var subHeader = $(".m-sub-header");
  var navMobile = $(".mobile-nav");
  var subHeaderDesktop = $(".sub-header");
  var navDesktop = $(".web-nav");
  var navSecondaryDesktop = $(".secondary-nav");
  $(window).scroll(function () {
    // Calculate the scroll position
    var scrollPosition = $(this).scrollTop();

    // Adjust opacity and visibility based on the scroll position
    if (scrollPosition > 190) {
      subHeaderDesktop.css({
        transform: "translateY(-400%)",
        transition:
          "background-color 0.9s ease 0s, transform 0.9s ease 0s, -webkit-transform 0.9s ease 0s",
        //transition: "all 0.5s ease",
      });
      navDesktop.css({
        transform: "translateY(-400%)",
        transition:
          "background-color 0.9s ease 0s, transform 0.9s ease 0s, -webkit-transform 0.9s ease 0s",
        //transition: "all 0.5s ease",
      });
    } else {
      subHeaderDesktop.css({
        transform: "translateY(0)",
        transition:
          "background-color 0.4s ease 0s, transform 0.4s ease 0s, -webkit-transform 0.4s ease 0s",
        //transition: "all 0.5s ease",
      });
      navDesktop.css({
        transform: "translateY(0)",
        transition:
          "background-color 0.4s ease 0s, transform 0.4s ease 0s, -webkit-transform 0.4s ease 0s",
        //transition: "all 0.5s ease",
      });
    }

    if (scrollPosition > 1600) {
      navSecondaryDesktop.css({
        visibility: "visible",
        opacity: 1,
        transform: "translateY(0)",
      });
    } else {
      navSecondaryDesktop.css({
        transform: "translateY(-200%)",
        visibility: "visible",
        opacity: 1,
      });
    }
  });
});
//MENU SCRIPT
$(document).ready(function () {
  var menuLink = $(".menu-link");
  var menuLinks = $("#menu-links");
  var closeIcon = $("#close-icon");
  var openIcon = $("#open-icon");

  $(".menu-link").click(function () {
    menuLinks.css({
      transform: "translateY(-50%)",
      visibility: "hidden",
      opacity: 0,
    });
    closeIcon.css({
      visibility: "hidden",
      opacity: 0,
    });
    openIcon.css({ visibility: "visible", opacity: 1 });
  });

  $("#menu-button").click(function (e) {
    e.preventDefault();
    if (menuLinks.css("visibility") === "visible") {
      menuLinks.css({
        transform: "translateY(-50%)",
        visibility: "hidden",
        opacity: 0,
      });
      closeIcon.css({
        visibility: "hidden",
        opacity: 0,
      });
      openIcon.css({ visibility: "visible", opacity: 1 });
    } else {
      menuLinks.css({
        visibility: "visible",
        opacity: 1,
        transform: "translateY(0)",
      });
      closeIcon.css({
        visibility: "visible",
        opacity: 1,
      });
      openIcon.css({ visibility: "hidden", opacity: 0 });
    }
  });

  $(window).scroll(function () {
    // Calculate the scroll position
    var scrollPosition = $(this).scrollTop();

    // Adjust opacity and visibility based on the scroll position
    if (scrollPosition > 190) {
      menuLinks.css({
        transform: "translateY(-50%)",
        visibility: "hidden",
        opacity: 0,
      });
      closeIcon.css({
        visibility: "hidden",
        opacity: 0,
      });
      openIcon.css({ visibility: "visible", opacity: 1 });
    }
  });
});

//SECONDARY MENU SCRIPT
$(document).ready(function () {
  var menuLinkSecondary = $(".menu-link-secondary");
  var menuLinksSecondary = $("#menu-links-secondary");
  var closeIconSecondary = $("#close-icon-secondary");
  var openIconSecondary = $("#open-icon-secondary");

  $(".menu-link-secondary").click(function () {
    menuLinksSecondary.css({
      transform: "translateY(-50%)",
      visibility: "hidden",
      opacity: 0,
    });
    closeIconSecondary.css({
      visibility: "hidden",
      opacity: 0,
    });
    openIconSecondary.css({ visibility: "visible", opacity: 1 });
  });

  $("#menu-button-secondary").click(function (e) {
    e.preventDefault();
    if (menuLinksSecondary.css("visibility") === "visible") {
      menuLinksSecondary.css({
        transform: "translateY(-50%)",
        visibility: "hidden",
        opacity: 0,
      });
      closeIconSecondary.css({
        visibility: "hidden",
        opacity: 0,
      });
      openIconSecondary.css({ visibility: "visible", opacity: 1 });
    } else {
      menuLinksSecondary.css({
        visibility: "visible",
        opacity: 1,
        transform: "translateY(0)",
      });
      closeIconSecondary.css({
        visibility: "visible",
        opacity: 1,
      });
      openIconSecondary.css({ visibility: "hidden", opacity: 0 });
    }
  });

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition < 1600) {
      menuLinksSecondary.css({
        transform: "translateY(-50%)",
        visibility: "hidden",
        opacity: 0,
      });
      closeIconSecondary.css({
        visibility: "hidden",
        opacity: 0,
      });
      openIconSecondary.css({ visibility: "visible", opacity: 1 });
    }
  });
});

//MOBILE MENU SCRIPT
$(document).ready(function () {
  var menuLink = $(".menu-link");
  var menuLinks = $("#menu-links");
  var closeIcon = $("#close-icon-mobile");
  var openIcon = $("#open-icon-mobile");

  $(".menu-link").click(function () {
    menuLinks.css({
      transform: "translateY(-50%)",
      visibility: "hidden",
      opacity: 0,
    });
    closeIcon.css({
      visibility: "hidden",
      opacity: 0,
    });
    openIcon.css({ visibility: "visible", opacity: 1 });
  });

  $("#menu-button-mobile").click(function (e) {
    e.preventDefault();
    if (menuLinks.css("visibility") === "visible") {
      menuLinks.css({
        transform: "translateY(-50%)",
        visibility: "hidden",
        opacity: 0,
      });
      closeIcon.css({
        visibility: "hidden",
        opacity: 0,
      });
      openIcon.css({ visibility: "visible", opacity: 1 });
    } else {
      menuLinks.css({
        visibility: "visible",
        opacity: 1,
        transform: "translateY(0)",
      });
      closeIcon.css({
        visibility: "visible",
        opacity: 1,
      });
      openIcon.css({ visibility: "hidden", opacity: 0 });
    }
  });

  $(window).scroll(function () {
    // Calculate the scroll position
    var scrollPosition = $(this).scrollTop();

    // Adjust opacity and visibility based on the scroll position
    if (scrollPosition > 190) {
      menuLinks.css({
        transform: "translateY(-50%)",
        visibility: "hidden",
        opacity: 0,
      });
      closeIcon.css({
        visibility: "hidden",
        opacity: 0,
      });
      openIcon.css({ visibility: "visible", opacity: 1 });
    }
  });
});

//SECONDARY MOBILE MENU SCRIPT
$(document).ready(function () {
  var menuLinkSecondary = $(".menu-link-m-secondary");
  var menuLinksSecondary = $("#menu-links-secondary");
  var closeIconSecondary = $("#close-icon-m-secondary");
  var openIconSecondary = $("#open-icon-m-secondary");

  $(".menu-link-secondary").click(function () {
    menuLinksSecondary.css({
      transform: "translateY(-50%)",
      visibility: "hidden",
      opacity: 0,
    });
    closeIconSecondary.css({
      visibility: "hidden",
      opacity: 0,
    });
    openIconSecondary.css({ visibility: "visible", opacity: 1 });
  });

  $("#menu-button-m-secondary").click(function (e) {
    e.preventDefault();
    if (menuLinksSecondary.css("visibility") === "visible") {
      menuLinksSecondary.css({
        transform: "translateY(-50%)",
        visibility: "hidden",
        opacity: 0,
      });
      closeIconSecondary.css({
        visibility: "hidden",
        opacity: 0,
      });
      openIconSecondary.css({ visibility: "visible", opacity: 1 });
    } else {
      menuLinksSecondary.css({
        visibility: "visible",
        opacity: 1,
        transform: "translateY(0)",
      });
      closeIconSecondary.css({
        visibility: "visible",
        opacity: 1,
      });
      openIconSecondary.css({ visibility: "hidden", opacity: 0 });
    }
  });

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition < 1600) {
      menuLinksSecondary.css({
        transform: "translateY(-50%)",
        visibility: "hidden",
        opacity: 0,
      });
      closeIconSecondary.css({
        visibility: "hidden",
        opacity: 0,
      });
      openIconSecondary.css({ visibility: "visible", opacity: 1 });
    }
  });
});
