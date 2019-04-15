var campoFiltro = document.querySelector("#filtrar-tabela");

// Pegando o Input do campo de filtro
campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    // Limpando a tabela
    if (this.value.length > 0) {
        // Selecionando todos os pacientes e pagando o nome deles
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // Variavel de expressão, para pegar os inicios das palavras
            var expressao = new RegExp(this.value, "i");

            // Fazendo a invisibilidade do filtro
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } // Removendo o display block quando ta vazio o campo
    else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});