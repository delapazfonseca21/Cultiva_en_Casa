const API_URL = 'https://cultiva-en-casa-back.vercel.app/api/auth/'
console.warn("Ésto podría romperse, pilas, ojito")

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const password2 = document.getElementById("registerPassword2").value;
    const errorMessage = document.getElementById("register-error-message");

    if (password !== password2) {
        errorMessage.textContent = "Las contraseñas no coinciden.";
        return;
    }

    try {
        const response = await fetch(`${API_URL}register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        alert("Registro exitoso del usuario ", name);
        window.location.replace('../../index.html')
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});
