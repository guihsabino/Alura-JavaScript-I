/* Seção de Calculo do IMC */

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {

    //truque para colocar o valor de paciente em pacientes
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var campo_imc = paciente.querySelector(".info-imc");

    var peso_valido = true;
    var altura_valida = true;

    if (peso <= 0 || peso >= 1000) {
        //alert("peso invalido");
        console.log("Peso Invalido!");
        peso_valido = false;
        campo_imc.textContent = ("Peso Invalido!");
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.0) {
        //alert("altura invalida");
        console.log("Peso Invalido!");
        altura_valida = false;
        campo_imc.textContent = ("Altura Invalida!");
        paciente.classList.add("paciente-invalido");
    }

    if (peso_valido && altura_valida) {
        var imc = peso / (altura * altura);
        campo_imc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}



