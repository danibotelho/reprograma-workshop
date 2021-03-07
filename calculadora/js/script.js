
//querySelector seleciona a tag.
var inputQuantMes = document.querySelector("#ganho-mes"); //var de input
var inputHorasDia = document.querySelector("#horas-dia");
var resp = document.querySelector('#resposta'); //definição de var resp


// value agrega valor ao var 

function calcularValorHora() {
    // value agrega valor do input a variavel 
    var quantidadeMes = inputQuantMes.value;
     var horasDias = inputHorasDia.value;
     
     //logica do calculo, hrs trabalhadas pelos dias trabalhados
     var horasMes = horasDias * 22;
   
     //logica do calculo, salario dividido pelas horas totais do mes
     var total = quantidadeMes / horasMes;
    
    //textContent agrega novo valor a tag
    //toFixed para definir qnts casa decimais
    //textContent leva pra tag o que deve ser apresentado
    resp.textContent = "R$" + total.toFixed(2);
   
    //não precisa de " " qndo se qer mostrar o var 
    console.log(total);
}

