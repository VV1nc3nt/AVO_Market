$(document).ready(function(){
  $('.main_banner_slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $('.card_container_slider').slick({
    slidesToShow: 5,
    appendArrows: $(".btn_arrows"),
    pauseOnHover: true,
    pauseOnDotsHover: true
  });
  $('.card_img_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    draggable: false,
    // fade: true,
  });
});
	