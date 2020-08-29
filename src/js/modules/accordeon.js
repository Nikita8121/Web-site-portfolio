const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(".accordion-block");

    function showAccordion(i) {
        btns[i].classList.add('active-style');
        blocks[i].classList.add('active-content');
        blocks[i].style.maxHeight = blocks[i].scrollHeight + 80 + "px";
    }
    function hideAccordion() {
        btns.forEach(item => {
            item.classList.remove('active-style');
        });
        blocks.forEach(item => {
            item.classList.remove('active-content');
            item.style.maxHeight = '0px';
        });
    }



    btns.forEach((btn, i) => {
        btn.addEventListener('click', function () {
            if(btn.classList.contains('active-style')) {
                hideAccordion();
            } else {
                hideAccordion();
                showAccordion(i);
            }
            
        });
    });
};

export default accordion;
