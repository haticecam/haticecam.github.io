  window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    setTimeout(function () {
      $('.gallery-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
      });
    }, 200);
  });

