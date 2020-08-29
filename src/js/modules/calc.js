
const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result),
        calcForm = document.querySelector('.calc_form'),
        sumInput = document.createElement('input');

        sumInput.style.display = 'none';
        sumInput.setAttribute('id', "sum");
        calcForm.appendChild(sumInput);
    
    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        sumInput.value = sum;
        if(sizeBlock.value == "" || materialBlock.value == "") {
            resultBlock.TextContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART'){
            resultBlock.textContent = Math.round(sum * 0.7);
            sumInput.value = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent  = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
    
    
   
        
        
       
    

};

export default calc;