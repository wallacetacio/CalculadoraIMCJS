const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnFour = document.getElementById('four');
const btnFive = document.getElementById('five');
const btnSix = document.getElementById('six');
const btnSeven = document.getElementById('seven');
const btnEigth = document.getElementById('eigth');
const btnNine = document.getElementById('nine');
const btnZero = document.getElementById('zero');
const btnComma = document.getElementById('comma');
const btnSubmit = document.getElementById('submit');
const btnClean = document.getElementById('clean');
const screen = document.getElementById('calc-component');
const instrucao = document.getElementById('instruction');
let valorAltura;
let valorPeso;
let valorImc;
let resultado;

btnOne.addEventListener('click', (event) => {
    screen.insertAdjacentText('beforeend', 1);
    event.preventDefault();
});

btnTwo.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 2);
});

btnThree.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 3);
});

btnFour.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 4);
});

btnFive.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 5);
});

btnSix.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 6);
});

btnSeven.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 7);
});

btnEigth.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 8);
});

btnNine.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 9);
});

btnZero.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', 0);
});

btnComma.addEventListener('click', (event) => {
    event.preventDefault();
    screen.insertAdjacentText('beforeend', '.');
});

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if(valorAltura === undefined){
    gravaAltura();
} else if(valorPeso === undefined) {
    gravaPeso();
} else {
    imc();
}
});

btnClean.addEventListener('click', (event) => {
    event.preventDefault();
    screen.innerHTML = "";
    valorPeso = undefined;
    valorAltura = undefined;
    instrucao.innerHTML = "Digite seu Altura!";
});

instrucao.innerHTML = "Digite seu Altura!";

function gravaAltura() {

    valorAltura = screen.innerText;
    screen.innerHTML = "";
    instrucao.innerHTML = "";
    console.log(valorAltura);
    instrucao.innerHTML = "Digite seu peso!"
}

function gravaPeso() {
        instrucao.innerHTML = "Digite seu peso!"
        valorPeso = screen.innerText;
        screen.innerHTML = "";
        instrucao.innerHTML = "";
        console.log(valorPeso);
        imc();
        instrucao.innerHTML = `Esse é seu IMC! </br> ${resultado}`
}

function imc() {
    valorImc = Number(valorPeso)/Math.pow(Number(valorAltura),2);
    screen.innerText = valorImc.toFixed(2);
    
    if(valorImc < 16){
    resultado = "Peso deficitário."
    }

    else if(valorImc <= 18.5){
        resultado = "Abaixo do peso.";
    }

    else if(valorImc <= 24){ 
        resultado = "Peso ideal (normal).";
    }

    else if(valorImc <= 30){ 
        resultado = "Acima do peso.";
    }

    else if(valorImc <= 35){
        resultado = "Obesidade nível 1.";
    }

    else if(valorImc <= 40){
        resultado = "Obesidade nível 2.";
    }

    else if(valorImc > 40){
        resultado = "Obesidade nível 3.";
    }
}