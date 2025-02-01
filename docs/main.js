document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita que el formulario se envíe normalmente

            // Simula una validación (reemplaza con tu lógica real)
            const username = document.getElementById("user").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username && password) {
                // Redirige si hay datos en los campos
                window.location.href = "/docs/pages/02-home/index.html";
            } else {
                alert("Por favor, completa todos los campos.");
            }
        });
    }
});
