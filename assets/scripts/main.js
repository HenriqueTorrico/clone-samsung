/* carousel de imagens - banner home */
$(function(){
  $(".slides").slick({
    infinity: true,
    prevArrow: $(".seta-antes-slides"),
    nextArrow: $(".seta-depois-slides"),
  });
})

/* vitrine de celulares */

$('.container-vitrine').slick({
  infinity: true,
  prevArrow: $(".seta-antes-vitrine"),
  nextArrow: $(".seta-depois-vitrine"),
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 920,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 659,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});