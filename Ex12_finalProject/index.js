$('.myslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(window).scroll(
  function () {
    // 화면의 위쪽을 기준으로 값을 가져오는 애 50보다 크다 => 스크롤을 조금이라도 내렸다
    if ($(this).scrollTop() > 50) {
      $('header').addClass('active');
    } else {
      // 가장 위인 상태
      $('header').removeClass('active');
    }
  }
);