
const scrolling = (upSelector, $) => {
    const upElem = document.querySelector(upSelector);
    let para = document.querySelector('.header nav');
    let compStyles = window.getComputedStyle(para);
    let height  = compStyles.getPropertyValue('min-height').match(/(\d+)/);
    

    window.addEventListener('scroll', () => {
        const topercent = (document.documentElement.scrollTop / document.documentElement.scrollHeight) * 100;

        if (topercent > 15) {
            upElem.classList.add('active');

        } else {

            upElem.classList.remove('active');
        }
    });


    let links = document.querySelectorAll('[href]');


    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();


            if (link.getAttribute('href').substring(0, 1) == "#") {
                $('html, body').animate({
                    scrollTop: $(link.getAttribute('href')).offset().top - height[0] 
                }, 1000);
            }

        });
    });
};

export default scrolling;