document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const tarjeta = document.getElementById('tarjeta').value;
        const numeroTarjeta = document.getElementById('numero-tarjeta').value;
        const fechaExpiracion = document.getElementById('fecha-expiracion').value;
        const cvv = document.getElementById('cvv').value;
        
        if (nombre.trim() === '' || tarjeta.trim() === '' || numeroTarjeta.trim() === '' || fechaExpiracion.trim() === '' || cvv.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }
        
        if (!/^[A-Za-z\s]+$/.test(nombre)) {
            alert('Nombre deben contener solo letras y espacios.');
            return;
        }
        
        if (tarjeta !== 'visa' && tarjeta !== 'mastercard') {
            alert('Seleccione un tipo de tarjeta válido.');
            return;
        }
        
        if (!/^\d{16}$/.test(numeroTarjeta)) {
            alert('Número de tarjeta inválido. Deben ser 16 dígitos.');
            return;
        }
        
        if (!/^\d{2}\/\d{2}$/.test(fechaExpiracion)) {
            alert('Fecha de expiración inválida. Use el formato MM/YY.');
            return;
        }
        
        if (!/^\d{3}$/.test(cvv)) {
            alert('CVV inválido. Deben ser 3 dígitos.');
            return;
        }
        
        alert('Pago exitoso!');
        form.reset();
    });
});

