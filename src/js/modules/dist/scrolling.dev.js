"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var scrolling = function scrolling(upSelector) {
  var upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.remove('animated', 'fadeOut');
      upElem.classList.add('animated', 'fadeIn');
    } else {
      upElem.classList.remove('animated', 'fadeIn');
      upElem.classList.add('animated', 'fadeOut');
    }
  });
  var links = document.querySelectorAll('[href]'),
      speed = 0.4;
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        var progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
  /*  const element = document.documentElement,
           body = document.body;
         const calcScroll = () => {
           upElem.addEventListener('click', function (event) {
               let scrollTop = Math.round(body.scrollTop || element.scrollTop);
               if(this.hash !== ''){
                   event.preventDefault();
                   let hashElement = document.querySelector(this.hash),
                       hashElementTop = 0;
                     while(hashElement.offsetParent) {
                       hashElementTop += hashElement.offsetTop;
                       hashElement = hashElement.offsetParent;
                   }    
                     hashElementTop = Math.round(hashElementTop);
                   smoothScroll(scrollTop, hashElementTop, this.hash);
                   
               }
           });
       };
       const smoothScroll = (from, to , hash) => {
           let timeInterval = 10,
           previousScrollTop,
           speed;
  
           if(to > from) {
               speed = 30;
           } else {
               speed = -30;
           }
             let move = setInterval(function() {
               let scrollTop = Math.round(body.scrollTop || element.scrollTop);
                 if(
                   previousScrollTop  === scrollTop ||
                   (to > from && scrollTop >= to) || 
                   (to < from && scrollTop <= to)
               ){
                   clearInterval(move);
                   history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
               }else {
                   body.scrollTop += speed;
                   element.scrollTop +=speed;
                   previousScrollTop = scrollTop;
               }
           }, timeInterval);
       };
       calcScroll (); */
};

var _default = scrolling;
exports["default"] = _default;