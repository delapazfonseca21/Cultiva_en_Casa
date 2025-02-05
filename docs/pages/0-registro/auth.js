import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSMGbZ_MirInQ951B1GyQ9mi-NNO3O_z0",
    authDomain: "cultivaencasa-72bec.firebaseapp.com",
    projectId: "cultivaencasa-72bec",
    storageBucket: "cultivaencasa-72bec.firebasestorage.app",
    messagingSenderId: "941294812318",
    appId: "1:941294812318:web:fe5cc8c61853988d5f0f8f",
    measurementId: "G-EHBH2W5294"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Registro de usuario
document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const identidad = document.getElementById("identidad").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const errorMessage = document.getElementById("register-error-message");

    if (password !== password2) {
        errorMessage.textContent = "Las contraseñas no coinciden.";
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, identidad, password);
        const user = userCredential.user;

        // Guardar datos en Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            idUser: identidad,
            createdAt: new Date()
        });

        alert("Registro exitoso: " + name);
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});
