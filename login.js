function validarUsuarioSenha() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifique se o usuário e a senha estão corretos (substitua isso com sua lógica de validação real).
    if (username === "admin" && password === "admin") {
        // Redirecionar para a página desejada (substitua "pagina.html" pela URL desejada).
        window.location.href = "inicio.html";
    } else {
        // Exibir mensagem de erro.
        document.getElementById("mensagemErro").innerHTML = "Algo de errado. Verifique suas credenciais.";
    }
}

// Impedir o envio do formulário quando o botão for clicado.
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
});