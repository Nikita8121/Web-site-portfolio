import $ from 'jquery';
import accordion from './modules/accordeon';
import scrolling from './modules/scrolling';
import sliders from './sliders';
import burger from './modules/burger';
import skills from './modules/skills';







window.addEventListener('DOMContentLoaded',   () => {
    sliders($);
    accordion('.accordion-heading');
    scrolling('.pageup', $);
    burger();
     
      [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) { img.setAttribute('src', img.getAttribute('data-src')); img.onload = function() { img.removeAttribute('data-src'); }; });
      skills();
});

window.addEventListener('load',  () => {
    const body = document.querySelector('body'),
    spinner = document.querySelector(".spinner");

    body.classList.remove('active');
    spinner.style.display = "none";
    const wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    );
    wow.init();

});