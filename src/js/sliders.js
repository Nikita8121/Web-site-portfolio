
import 'slick-carousel';


const sliders = ($) =>{
    $('.main-slider').slick({
        prevArrow: $('.prev-slider'),
        nextArrow: $('.next-slider'),
        autoplay: true,
        autoplaySpeed: 6000
    }); 


    $('.reviews_slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        zIndex: 0,
        customPaging: function () {
    
          return '<div class="dots" > </div>';
        }
      });
};

export default sliders;
 
