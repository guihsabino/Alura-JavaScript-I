/* NESTE CÓDIGO, ESTAMOS USANDO O FILHO MESMO PRA EXCLUIR, NO OUTRO, USAMOS O PAI
// pra uma lista de pacientes, faz a função usando a classe paciente
pacientes.forEach(function (paciente) {
    // quando pegar o duplo clique, executa a função anonima
    paciente.addEventListener("dblclick", function () {
        this.remove();
    })
}); */

// selecionando todos os pacientes
var pacientes = document.querySelectorAll(".paciente");
// seleciona a tabela toda que contem os pacientes
var tabela = document.querySelector("#tabela-pacientes");

// adiciona a questão do 2x cliques usando como parametro da função o evento clicado
tabela.addEventListener("dblclick", function (event) {
    // separa e informa que é pra remover só o clicado na tabela pai do evento
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove();

});


