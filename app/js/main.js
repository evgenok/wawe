$(function () {
   $(".menu a").on("click", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор блока с атрибута href
      var id = $(this).attr('href'),

         //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   $('.slider__inner').slick({
      dots: true,
      infinite: true,
      speed: 1300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false
   });

   $('.burger, .menu a').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
   });

   var mixer = mixitup('.gallery__inner');
});