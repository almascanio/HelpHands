document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmarPassword = document.getElementById("confirmar-password").value;

        if (password !== confirmarPassword) {
            alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
            return;
        }

        console.log("Nombre: " + nombre);
        console.log("Email: " + email);
        console.log("Contraseña: " + password);

        // Limpia el formulario
        form.reset();
    });
});
