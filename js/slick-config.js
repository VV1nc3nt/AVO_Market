$(document).ready(function(){
  $('.main_banner_slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    lazyLoad: "progressive"
  });
  $('.popular_container_slider').slick({
    slidesToShow: 5,
    appendArrows: $(".btn_arrows")
  });
  $('.new_container_slider').slick({
    slidesToShow: 5,
    appendArrows: $(".btn_arrows_new")
  });
  $('.watched_container_slider').slick({
    slidesToShow: 5,
    appendArrows: $(".btn_arrows_watched")
  });
  $('.card_img_slider').slick({
    arrows: false,
    dots: true,
    draggable: false
  });
  $('.popular_slider').slick({
    slidesToShow: 7,
    appendArrows: $(".btn_arrows_popular")
  });
  $('.brands_slider').slick({
    slidesToShow: 6,
    appendArrows: $(".btn_arrows_brands"),
    rows: 2
  });
});
	