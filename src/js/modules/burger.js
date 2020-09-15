const burger = () => {
    const burger = document.querySelector('.hamburger'),
        nav = document.querySelector('header nav'),
        menu = document.querySelector('header ul'),
        menuitem = document.querySelectorAll('header ul>li'),
        body = document.querySelector('body');


    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('active');


        if (menu.classList.contains('active')) {
            nav.style.minHeight = `${nav.scrollHeight + 160 + menuitem.scrollHeight}px`;
            menuitem.forEach((item) => {
                item.classList.toggle('active');
            });
        }
    });

    window.addEventListener('scroll',   () => {


        menuitem.forEach((item, i) => {
            item.classList.remove('active-section');

            const id = item.childNodes[0].getAttribute('href'),
                section = document.querySelector(id);
                if (window.innerHeight + window.scrollY == body.offsetHeight) {
                    if(item == menu.lastChild){
                        item.classList.add('active-section');
                    }
                    
                    
                }else if                            (window.pageYOffset >= section.offsetTop - nav.scrollHeight && window.pageYOffset <= section.offsetTop - nav.scrollHeight + section.scrollHeight) {
                item.classList.add('active-section');
            }  
        });
    });

};

export default burger;