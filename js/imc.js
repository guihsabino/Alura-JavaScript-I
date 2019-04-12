/* Seção de Calculo do IMC */

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {

    //truque para colocar o valor de paciente em pacientes
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var peso_valido = validaPeso(peso);
    var altura_valida = validaAltura(altura);

    // Validação de Peso e Altura
    if (!peso_valido) {
        //alert("peso invalido");
        console.log("Peso Invalido!");
        peso_valido = false;
        tdImc.textContent = ("Peso Invalido!");
        paciente.classList.add("paciente-invalido");
    }
    if (!altura_valida) {
        //alert("altura invalida");
        console.log("Altura Invalida!");
        altura_valida = false;
        tdImc.textContent = ("Altura Invalida!");
        paciente.classList.add("paciente-invalido");
    }

    // Calculo do IMC
    if (peso_valido && altura_valida) {
        // sendo valido, passa os valores pra função
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

/* Area de Funções */

//função que valida peso
function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

//função que valida altura
function validaAltura(altura) {
    if (altura >= 0 && altura <= 2.5) {
        return true;
    } else {
        return false;
    }
}

// função que calcula IMC
function calculaImc(peso, altura) {
    // inicia a variavel de calculo com 0, faz o calculo, e retorna pro tdImc
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}





