
const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const curso = document.getElementById("curso").value;

    const aluno = document.createElement("li");
    aluno.textContent = nome + " - " + email + " - " + curso;

    lista.appendChild(aluno);

    mensagem.textContent = "Aluno cadastrado com sucesso!";

    formulario.reset();
});
