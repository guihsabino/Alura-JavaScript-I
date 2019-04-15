var botaoAdicionar = document.querySelector("#buscar-pacientes");
// Adicionando função para clique
botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes...");
    // Criando o request das informações externas
    var xhr = new XMLHttpRequest();
    // Abrindo e pegando essas informações neste endereço
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    // Adicionando a função de carregar esses dados, e transformá-los em um objeto JS
    xhr.addEventListener("load", function () {

        // Sendo cauteloso quanto a exibição do erro
        var erroAjax = document.querySelector("#erro-ajax");
        erroAjax.classList.remove("invisivel");
        // Verificando o status da requisição
        if (xhr.status == 200) {
            // mantem o erro invisivel
            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);

            // Para cada paciente da lista, esta chamando a função de add na tabela
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            // mostra o erro
            erroAjax.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);


        }
    });
    // Função de enviar esses dados 
    xhr.send();
});
