import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";


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

// Inicio de Sesión del usuario
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const errorMessage = document.getElementById("login-error-message");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Inicio de sesión exitoso: " + userCredential.user.email);
        window.location.replace("./pages/02-home/index.html");
    } catch (error) {
        errorMessage.textContent = error.message;
        alert("hubo un error grave "+error);
    }
});
