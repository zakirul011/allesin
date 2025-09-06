(function ($) {
  "use strict";

  /*=========================
	PRELOADER JS
	===========================*/
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  /*=========================
	testimony-slider
	===========================*/
  $(".testimony-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
  });

  /*=========================
	product-slider
	===========================*/
  $(".product-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /*=========================
	magnificPopup image JS
	===========================*/
  $(".video-btn").magnificPopup({
    type: "iframe",
  });

  $(".pop-img-btn").magnificPopup({
    type: "image",
  });
  $(".gallery-item a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // sticky
  var wind = $(window);
  var sticky = $(".header-area");
  var holder = $(".header-holder");
  var megaMenu = $(".megamenu");

  wind.on("load", function () {
    holder.css("height", sticky.height());
    if (window.matchMedia("(max-width: 767px)").matches) {
      megaMenu.css("height", "calc(100vh - " + sticky.height() + "px)");
    }
  });
  wind.on("resize", function () {
    holder.css("height", sticky.height());
    if (window.matchMedia("(max-width: 767px)").matches) {
      megaMenu.css("height", "calc(100vh - " + sticky.height() + "px)");
    }
  });

  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 150) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  // applyLergestheight
  window.addEventListener("load", () => {
    applyLergestheight(document.querySelectorAll(".plan-item"));
  });
  window.addEventListener("resize", () => {
    applyLergestheight(document.querySelectorAll(".plan-item"));
  });
  function applyLergestheight(items) {
    const itemheight = [];
    items.forEach((item) => {
      itemheight.push(item.getBoundingClientRect().height);
    });
    items.forEach((item) => {
      item.style.height = Math.max.apply(null, itemheight) + "px";
    });
  }

  // niceSelect
  $("select").niceSelect();

  // skrollr activation
  var s = skrollr.init({
    forceHeight: false,
    smoothScrollingDuration: 500,
  });
  if (s.isMobile()) {
    s.destroy();
  }

  // custom tab
  tabFunc(
    document.querySelectorAll(".plan-link li"),
    document.querySelectorAll(".plan-tab")
  );
  tabFunc(
    document.querySelectorAll(".faq-link li"),
    document.querySelectorAll(".faq-tab")
  );

  const shopTabWrapper = document.querySelectorAll('.shop-item')
  shopTabWrapper.forEach(wrap => {
    tabFunc(
      wrap.querySelectorAll(".shop-info-link li"),
      wrap.querySelectorAll(".shop-info-tab")
      );
    tabFunc2(
      wrap.querySelectorAll(".shop-info-mobile-link"),
      wrap.querySelectorAll(".shop-info-tab")
    );
  });
  function tabFunc(tabLinks, tabs) {
    tabLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        for (let i = 0; i < tabLinks.length; i++) {
          tabLinks[i].classList.remove("active");
          tabs[i].classList.remove("active");
        }
        link.classList.add("active");
        tabs[index].classList.add("active");
      });
    });
  }


  tabFunc2(
    document.querySelectorAll(".plan-mobile-link"),
    document.querySelectorAll(".plan-tab")
  );
  tabFunc2(
    document.querySelectorAll(".faq-mobile-link"),
    document.querySelectorAll(".faq-tab")
  );

  tabFunc2(
    document.querySelectorAll(".shop-panel-mobile-link"),
    document.querySelectorAll(".shop-panel")
  );

  function tabFunc2(tabLinks, tabs) {
    tabLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        if (link.classList.contains("active")) {
          for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active");
            tabs[i].classList.remove("active");
          }
        } else {
          for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active");
            tabs[i].classList.remove("active");
          }
          link.classList.add("active");
          tabs[index].classList.add("active");
        }
      });
    });
  }


  // MEGAMENU
  const humbergerBar = document.querySelectorAll(".humberger-bar");
  humbergerBar.forEach((btn) => {
    let megamenu = document.querySelector(".megamenu");

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      megamenu.classList.toggle("active");
    });

    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".megamenu") &&
        !e.target.closest(".humberger-bar")
      ) {
        megamenu.classList.remove("active");
        btn.classList.remove("active");
      }
    });
  });

  // cta-btn
  const ctaBtn = document.querySelectorAll(".cta-btn button");
  ctaBtn.forEach((btn, index) => {
    let ctaForm = document.querySelector(".cta-form");
    btn.addEventListener("click", () => {
		for (let i = 0; i < ctaBtn.length; i++) {
			ctaBtn[i].classList.remove("active");
		}
		ctaForm.classList.remove("active");

		if (index == 1) {
			ctaForm.classList.add("active");
			btn.classList.add("active");
		}
    });

  });

  // shop info trigger
  const shopItem = document.querySelectorAll('.shop-item')
  shopItem.forEach(wrap => {
	const btn = wrap.querySelector(".shop-more-trigger");
	let box = wrap.querySelector(".shop-item-more-info");

	let textbox = btn.querySelector("span");
	let prevText = textbox.textContent;

	btn.addEventListener("click", () => {
	let PresentText = textbox.textContent;
	if (PresentText === prevText) {
		textbox.textContent = "Inklappen";
	} else {
		textbox.textContent = prevText;
	}
	box.classList.toggle("active");
	});
  });

  // price range
  $(document).ready(function () {
    if (document.getElementById("slider-range") != null) {
      $(".noUi-handle").on("click", function () {
        $(this).width(50);
      });
      var rangeSlider = document.getElementById("slider-range");
      var moneyFormat = wNumb({
        decimals: 0,
        thousand: ",",
        prefix: "€",
      });
      noUiSlider.create(rangeSlider, {
        start: [40, 100],
        step: 1,
        range: {
          min: [10],
          max: [150],
        },
        format: moneyFormat,
        connect: true,
      });

      // Set visual min and max values and also update value hidden form inputs
      rangeSlider.noUiSlider.on("update", function (values, handle) {
        document.getElementById("slider-range-value1").innerHTML = values[0];
        document.getElementById("slider-range-value2").innerHTML = values[1];
        document.getElementsByName("min-value").value = moneyFormat.from(
          values[0]
        );
        document.getElementsByName("max-value").value = moneyFormat.from(
          values[1]
        );
      });
    }
  });

  // price range
  $(document).ready(function () {
    if (document.getElementById("slider-range2") != null) {
      $(".noUi-handle").on("click", function () {
        $(this).width(50);
      });
      var rangeSlider2 = document.getElementById("slider-range2");
      var moneyFormat2 = wNumb({
        decimals: 0,
      });
      noUiSlider.create(rangeSlider2, {
        start: [40],
        step: 1,
        range: {
          min: [10],
          max: [150],
        },
        format: moneyFormat2,
      });

      // Set visual min and max values and also update value hidden form inputs
      rangeSlider2.noUiSlider.on("update", function (values, handle) {
        document.getElementById("slider-range2-value").innerHTML = values[0];
        document.getElementsByName("min-value2").value = moneyFormat2.from(
          values[0]
        );
      });
    }
  });




})(jQuery);
