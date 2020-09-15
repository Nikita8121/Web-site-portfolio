const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(".accordion-block");

    function showAccordion(i) {
        btns[i].classList.add('active');
        blocks[i].classList.add('active');
        blocks[i].style.maxHeight = blocks[i].scrollHeight + 80 + "px";
    }
    function hideAccordion() {
        btns.forEach(item => {
            item.classList.remove('active');
        });
        blocks.forEach(item => {
            item.classList.remove('active');
            item.style.maxHeight = '0px';
        });
    }



    btns.forEach((btn, i) => {
        btn.addEventListener('click', function () {
            if(btn.classList.contains('active')) {
                hideAccordion();
            } else {
                hideAccordion();
                showAccordion(i);
            }
            
        });
    });
};

export default accordion;
