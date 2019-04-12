/* Criando as funções pro formulário */

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {

    // previne as ações padrões do navegador
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //pegando os valores do HTML usando a função
    var paciente = extrairPaciente(form);

    // criando a tr na tabela do HTML e colocando as tds
    var pacienteTr = montaTr(paciente);

    // criando variavel para mostrar erro pro usuario
    var erros = validaPacientes(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    //criando a variavel tabela que representa a tabela do HTML  
    var tabela = document.querySelector("#tabela-pacientes");

    // colocando a tr que criamos dentro da tabela do HTML
    tabela.appendChild(pacienteTr);

    // limpando o formulario após add
    form.reset();
    var limpaMsgErro = document.querySelector("#mensagens-erro");
    limpaMsgErro.innerHTML = "";

});

/* Area de funções do Form */

// função que exibre mensagens de erro
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    // cria os li dentro da ul e joga o conteudo neles
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// função para extrair os pacientes do HTML
function extrairPaciente(form) {
    //criando paciente para extrair suas caracteristicas
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

// função para montar a tr e colocar as tds nela
function montaTr(paciente) {

    //montando a tr, e adicionando a classe paciente na tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /* montando as tds, e adicionando suas respectivas classes (função), 
       jogando o conteudo de texto das tds criadas para os valores no HTML (parametros da função)
       e fazendo as tds virarem filhas das trs (append) */
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// função que monta uma td
function montaTd(dado, classe) {
    // criando td no HTML e aadicionando seus conteudos
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

/* Área de Validações */

function validaPacientes(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;

}