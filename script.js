

let numero = 0;

function aumentar() {
    numero++;

    document.getElementById("contador").textContent = numero;
}
function somar() {
    const campo1 = document.getElementById("numero1").value;
    const campo2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    if (campo1 === "" || campo2 === "") {
        resultado.textContent = "Preencha os dois números.";
        return;
    }

    const numero1 = Number(campo1);
    const numero2 = Number(campo2);

    resultado.textContent = numero1 + numero2;
}

function subtrair() {
    const campo1 = document.getElementById("numero1").value;
    const campo2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    if (campo1 === "" || campo2 === "") {
        resultado.textContent = "Preencha os dois números.";
        return;
    }

    const numero1 = Number(campo1);
    const numero2 = Number(campo2);

    resultado.textContent = numero1 - numero2;
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