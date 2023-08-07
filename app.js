const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const result = document.querySelector('.result');
const equals = document.querySelector('#equals');
const clearAll = document.querySelector('#clear-all');
const percent = document.querySelector('#percent');
const signReverse = document.querySelector('#sign-reverse');
const coma = document.querySelector('#coma');

let firstTyped = "";
let isfirstTyped = false;
let nextTyped = "";
let isnextTyped = false;
let sumary = 0;

clearAll.addEventListener('click', () => {
    result.innerHTML = "0";
    firstTyped = "";
    isfirstTyped = false;
    nextTyped = "";
    isnextTyped = false;
    sumary = 0;
})

function displayNum(numAtr){
    result.innerHTML = '';
    firstTyped += numAtr;
    result.innerHTML = firstTyped;
    firstTyped = +firstTyped;
}

function displayNextNum(numAtr){
    if(firstTyped != "" && sign != ""){
        nextTyped += numAtr;
        result.innerHTML = nextTyped;
        nextTyped = +nextTyped;
    }
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        let numAtr = number.getAttribute('value');
        if(isfirstTyped === false){
            displayNum(numAtr);
            isnextTyped = false;
        }
        if(isfirstTyped === true){
            displayNextNum(numAtr);
        }
    })
});

operations.forEach(operation => operation.addEventListener('click', () => {
    sign = operation.getAttribute('value');
    nextTyped = '';
    isfirstTyped = true;
}));

equals.addEventListener('click', () => {
    if(sign == '+'){sumary = firstTyped + nextTyped;}
    if(sign == '-'){sumary = firstTyped - nextTyped;}
    if(sign == '*'){sumary = firstTyped * nextTyped;}
    if(sign == '/'){sumary = firstTyped / nextTyped;}

    isfirstTyped = false;

    firstTyped = sumary;
    nextTyped = '';

    result.innerHTML = sumary;
});

percent.addEventListener('click', () => {
    result.innerHTML = result.textContent 
})

signReverse.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstTyped != ""){
        sumary = -firstTyped;
        firstTyped = sumary;
    }
    if(firstTyped != "" && nextTyped != "" && sign != ""){
        sumary = -sumary;
    }
    result.innerHTML = sumary;
})
percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstTyped != ""){
        sumary = firstTyped / 100;
        firstTyped = sumary;
    }
    if(firstTyped != "" && nextTyped != "" && sign != ""){
        sumary = sumary / 100;
    }
    result.innerHTML = sumary;
});
coma.addEventListener('click', () => {
    if(isfirstTyped === false){
        firstTyped = firstTyped + '.';
        result.innerHTML = firstTyped;
    }else{
        nextTyped = nextTyped + '.';
        result.innerHTML = nextTyped;
    }
})