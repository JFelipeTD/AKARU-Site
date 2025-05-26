document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        loginForm.appendChild(errorMessage);

        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = event.target.email.value;
            const password = event.target.password.value;
        
            // E-mails de teste
            const tecnicoEmail = "tecnico@akaru.com";
            const clienteEmail = "cliente@akaru.com";
        
            if (email === tecnicoEmail && password === "1234") {
                window.location.href = "tecnico.html";
            } else if (email === clienteEmail && password === "1234") {
                window.location.href = "painel.html";
            } else {
                alert("Email ou senha incorretos. Tente novamente.");
            }
        });
    }
});