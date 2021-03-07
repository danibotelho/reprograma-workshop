
var inputValorHora = document.querySelector("#valor-hora"); 
var inputHorasProjeto = document.querySelector("#horas-projeto");
var resp = document.querySelector('#resposta'); 


function calcular() {
    var valorHora = inputValorHora.value;
    var horasProjeto = inputHorasProjeto.value;

    console.log("Valor da hora: "+valorHora);
    console.log("Horas do projeto: "+horasProjeto);

    var total = valorHora*horasProjeto;
    console.log("Valor Total: " +total);

    resp.textContent = "R$" + total.toFixed(2);

    
}