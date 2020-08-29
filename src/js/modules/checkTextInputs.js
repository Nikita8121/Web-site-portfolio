const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e){
            if (e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            }
        });
        input.addEventListener('change', function(e){
            if (e.currentTarget.value.match(/[a-z]/ig)){
                e.currentTarget.value =  e.currentTarget.value.replace(/[^a-z]/ig, '');
            }
        });
    });

};

export default checkTextInputs;