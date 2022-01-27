$(document).ready(function(){
  $('.main_banner_slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $('.card_container_slider').slick({
    slidesToShow: 5,
    appendArrows: $(".btn_arrows")
  });
});
	