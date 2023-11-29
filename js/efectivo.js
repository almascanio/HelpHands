document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    const tipoPagoSelect = document.getElementById('tipo-pago');
    const efectivoFields = document.getElementById('efectivo-fields');
    const mercaderiaFields = document.getElementById('mercaderia-fields');
    
    tipoPagoSelect.addEventListener('change', function() {
        const selectedOption = tipoPagoSelect.value;
        
        if (selectedOption === 'efectivo') {
            efectivoFields.classList.remove('hidden');
            mercaderiaFields.classList.add('hidden');
        } else if (selectedOption === 'mercaderia') {
            efectivoFields.classList.add('hidden');
            mercaderiaFields.classList.remove('hidden');
        } else {
            efectivoFields.classList.add('hidden');
            mercaderiaFields.classList.add('hidden');
        }
    });
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const selectedOption = tipoPagoSelect.value;
        
        if (selectedOption === 'efectivo') {
            const montoEfectivo = document.getElementById('monto-efectivo').value;
            
            if (montoEfectivo.trim() === '') {
                alert('Por favor, ingrese el monto en efectivo.');
                return;
            }
            
            alert(`Pago en efectivo de ${montoEfectivo} recibido.`);
        } else if (selectedOption === 'mercaderia') {
            const direccionEntrega = document.getElementById('direccion-entrega').value;
            
            if (direccionEntrega.trim() === '') {
                alert('Por favor, ingrese la dirección de entrega.');
                return;
            }
            
            alert(`Mercadería entregada en ${direccionEntrega}.`);
        } else {
            alert('Por favor, seleccione un tipo de pago válido.');
        }
        
        form.reset();
    });
});
