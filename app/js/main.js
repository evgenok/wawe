$(function() {

   $('.slider__inner').slick({
      dots: true,
      infinite: true,
      speed: 1300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false
   });

   var mixer = mixitup('.gallery__inner');
});