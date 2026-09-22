

let numero = 0;

function aumentar() {
    numero++;

    document.getElementById("contador").textContent = numero;
}

function diminuir() {
    numero--;

    document.getElementById("contador").textContent = numero;
}


function somar() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const resultado = numero1 + numero2;

    document.getElementById("resultado").textContent = resultado;
}

function subtrair() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const resultado = numero1 - numero2;

    document.getElementById("resultado").textContent = resultado;
}


function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "") {
        mensagem.textContent = "Preencha todos os campos.";
        return;
    }

    if (!email.includes("@")) {
        mensagem.textContent = "Digite um e-mail válido.";
        return;
    }

    mensagem.textContent = "Formulário enviado com sucesso!";
}