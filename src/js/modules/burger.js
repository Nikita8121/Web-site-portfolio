const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
            burgerElem.classList.add('is-active'); 
        } else {
            menuElem.style.display = 'none';
            burgerElem.classList.remove('is-active');
        }
    });


    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992){
            menuElem.style.display = 'none';
            burgerElem.classList.remove('is-active');
        }
    });
};

export default burger;