
const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const curso = document.getElementById("curso").value.trim();

    // Verificar campos vazios
    if (nome === "" || email === "" || curso === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    // Validar o formato do e-mail
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        mensagem.textContent = "Digite um e-mail válido!";
        mensagem.style.color = "red";
        return;
    }

    // Cadastrar aluno
    const aluno = document.createElement("li");
    aluno.textContent = nome + " - " + email + " - " + curso;

    lista.appendChild(aluno);

    mensagem.textContent = "Aluno cadastrado com sucesso!";
    mensagem.style.color = "green";

    formulario.reset();
});
