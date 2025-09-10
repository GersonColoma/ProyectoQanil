import { auth } from '../firebase-config.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Inicio de sesión con correo y contraseña
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Usuario autenticado con correo:", userCredential.user);
            showAppContent();
        })
        .catch((error) => {
            console.error("Error al iniciar sesión:", error.message);
        });
});

// Inicio de sesión con Google
const googleLoginBtn = document.getElementById('google-login-btn');
const googleProvider = new GoogleAuthProvider();
googleLoginBtn.addEventListener('click', () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log("Usuario autenticado con Google:", result.user);
            showAppContent();
        })
        .catch((error) => {
            console.error("Error al iniciar sesión con Google:", error.message);
        });
});

// Autenticación con OTP (Teléfono)
const phoneForm = document.getElementById('phone-form');
const otpForm = document.getElementById('otp-form');
let confirmationResult;

phoneForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;

    // Configurar el reCAPTCHA
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: () => {
            console.log('reCAPTCHA verificado');
        }
    }, auth);

    signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
        .then((result) => {
            confirmationResult = result;
            console.log("Código OTP enviado");
            phoneForm.style.display = 'none';
            otpForm.style.display = 'block';
        })
        .catch((error) => {
            console.error("Error al enviar OTP:", error.message);
        });
});

// Verificar código OTP
otpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const otpCode = document.getElementById('otp-code').value;

    confirmationResult.confirm(otpCode)
        .then((result) => {
            console.log("Usuario autenticado con OTP:", result.user);
            showAppContent();
        })
        .catch((error) => {
            console.error("Error al verificar OTP:", error.message);
        });
});

// Mostrar el contenido de la app después de la autenticación
function showAppContent() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
}

