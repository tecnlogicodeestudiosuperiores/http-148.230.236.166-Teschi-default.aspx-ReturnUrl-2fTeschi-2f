// CONFIGURACIÓN: Cambia aquí el usuario y contraseña autorizados
const USUARIO_CORRECTO = "admin123";
const PASSWORD_CORRECTA = "teschi2026";

// Esperar a que todo el documento cargue
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form1");

    formulario.addEventListener("submit", (evento) => {
        // Evita que la página se recargue automáticamente al enviar
        evento.preventDefault();

        // Capturar los valores que el usuario escribió en la pantalla
        const usuarioIngresado = document.getElementById("txtUsuario").value.trim();
        const passIngresada = document.getElementById("txtPass").value;

        // Validación de credenciales
        if (usuarioIngresado === USUARIO_CORRECTO && passIngresada === PASSWORD_CORRECTA) {
            alert("¡Inicio de sesión exitoso! Redirigiendo...");
            
            // Redirección: Cambia 'historial.html' por el nombre del archivo de tu segunda página
            window.location.href = "historial.html"; 
        } else {
            // Mensaje de error si fallan las credenciales
            alert("Usuario o contraseña incorrectos. Por favor, intente de nuevo.");
            
            // Limpiar el campo de contraseña por seguridad
            document.getElementById("txtPass").value = "";
        }
    });
});
