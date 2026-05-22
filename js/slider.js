$('.list-banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true
});


(function () {
  var $timelineSlider = $('.page-section-intro .list-slider');
  if (!$timelineSlider.length) return;

  var $section = $('.page-section-intro');
  var $year = $section.find('.timeline-detail__year');
  var $title = $section.find('.timeline-detail__title');
  var $desc = $section.find('.timeline-detail__desc');
  var $targets = $year.add($title).add($desc);
  var fadeDuration = 350;
  var isAnimating = false;
  var activeKey = '';

  function readItemData($item) {
    return {
      year: String($item.attr('data-year') || '').trim(),
      title: String($item.attr('data-title') || '').trim(),
      description: String($item.attr('data-description') || '').trim()
    };
  }

  function resolveSlideItem($slide) {
    if (!$slide || !$slide.length) return $();
    if ($slide.hasClass('box-slider-item')) return $slide;
    var $nested = $slide.find('.box-slider-item').first();
    return $nested.length ? $nested : $slide;
  }

  function getActiveItem(slick, slideIndex) {
    if (slick && slick.$slides && slideIndex != null && slick.$slides[slideIndex]) {
      var $fromEvent = resolveSlideItem($(slick.$slides[slideIndex]));
      if ($fromEvent.length) return $fromEvent;
    }

    var $slide = $timelineSlider.find('.slick-slide.slick-current').first();
    if (!$slide.length) {
      $slide = $timelineSlider.find('.slick-slide.slick-center').first();
    }

    var $item = resolveSlideItem($slide);
    if ($item.length) return $item;

    return $timelineSlider.find('.box-slider-item').not('.slick-cloned').first();
  }

  function applyTimelineDetail($item, animate) {
    var data = readItemData($item);
    var key = data.year + '|' + data.title;

    if (!data.year && !data.title && !data.description) return;

    if (!animate) {
      $year.text(data.year);
      $title.text(data.title);
      $desc.text(data.description);
      activeKey = key;
      return;
    }

    if (isAnimating || key === activeKey) return;

    isAnimating = true;
    $targets.removeClass('timeline-detail--fade-in').addClass('timeline-detail--fade-out');

    setTimeout(function () {
      $year.text(data.year);
      $title.text(data.title);
      $desc.text(data.description);
      activeKey = key;

      $targets.removeClass('timeline-detail--fade-out').addClass('timeline-detail--fade-in');

      setTimeout(function () {
        $targets.removeClass('timeline-detail--fade-in');
        isAnimating = false;
      }, fadeDuration);
    }, fadeDuration);
  }

  function syncTimelineDetail(animate, slick, slideIndex) {
    applyTimelineDetail(getActiveItem(slick, slideIndex), !!animate);
  }

  $timelineSlider.on('init', function (e, slick) {
    syncTimelineDetail(false, slick, slick.currentSlide);
  });

  $timelineSlider.on('afterChange', function (e, slick, currentSlide) {
    window.requestAnimationFrame(function () {
      syncTimelineDetail(true, slick, currentSlide);
    });
  });

  $timelineSlider.slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    infinite: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    prevArrow: "<button type='button' aria-label='bên trái' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button'aria-label='bên phải' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          centerMode: false,
          dots: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          dots: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  });
})();
$('.counter-numer').counterUp({
  delay: 10,
  time: 1000
});



$('.list-card-club').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.list-article').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: "<button type='button' aria-label='bên trái' class='slick-prev pull-left'><i class='fa-light fa-arrow-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button'aria-label='bên phải' class='slick-next pull-right'><i class='fa-light fa-arrow-right' aria-hidden='true'></i></button>",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




$('.list-job').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
 prevArrow: "<button type='button' aria-label='bên trái' class='slick-prev pull-left'><i class='fa-light fa-arrow-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button'aria-label='bên phải' class='slick-next pull-right'><i class='fa-light fa-arrow-right' aria-hidden='true'></i></button>",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




$('.partner').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
