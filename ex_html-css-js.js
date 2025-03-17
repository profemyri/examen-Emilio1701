// Modo claro/oscuro
const botonOscuro = document.getElementById('oscuro');
const body = document.body;

botonOscuro.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');
    if (body.classList.contains('modo-oscuro')) {
        botonOscuro.textContent = 'Modo Claro';
    } else {
        botonOscuro.textContent = 'Modo Oscuro';
    }
});

// Validación del formulario
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('Telefono');
const email = document.getElementById('Email');
const direccion = document.getElementById('Direeccion');
const cantidad = document.getElementById('Cantidad');
const instrucciones = document.getElementById('Instrucciones');
const botonEnviar = document.getElementById('boton');
const mensajeError = document.createElement('div');
mensajeError.style.color = 'red';
formulario.appendChild(mensajeError);

formulario.addEventListener('submit', (event) => {
    let errores = [];
    // Validación de campos obligatorios
    if (!nombre.value.trim()) errores.push("El campo Nombre es obligatorio.");
    if (!telefono.value.trim()) errores.push("El campo Teléfono es obligatorio.");
    if (!email.value.trim()) errores.push("El campo Email es obligatorio.");
    if (!direccion.value.trim()) errores.push("El campo Dirección es obligatorio.");
    
    // Validación de formato de email
    if (email.value && !email.value.includes('@')) errores.push("El email debe contener '@'.");
    
    // Validación de teléfono (solo números y al menos 9 dígitos)
    if (telefono.value && !/^\d{9,}$/.test(telefono.value)) errores.push("El teléfono debe contener solo números y al menos 9 dígitos.");
    
    // Validación de dirección (al menos 5 caracteres)
    if (direccion.value && direccion.value.length < 5) errores.push("La dirección debe tener al menos 5 caracteres.");
    
    // Si hay errores, mostramos un mensaje y evitamos el envío
    if (errores.length > 0) {
        event.preventDefault();
        mensajeError.innerHTML = errores.join('<br>');
    } else {
        mensajeError.innerHTML = '';
        // Confirmación antes de enviar el pedido
        if (!confirm('¿Está seguro de que desea enviar el pedido?')) {
            event.preventDefault();
        }
    }
});

// Contador de caracteres en instrucciones adicionales
const contadorInstrucciones = document.createElement('div');
formulario.appendChild(contadorInstrucciones);
instrucciones.addEventListener('input', () => {
    const caracteres = instrucciones.value.length;
    contadorInstrucciones.textContent = `${caracteres} / 200 caracteres`;
    if (caracteres > 200) {
        instrucciones.value = instrucciones.value.substring(0, 200);  // Limitar a 200 caracteres
        contadorInstrucciones.textContent = "200 / 200 caracteres (máximo)";
    }
});

// Cálculo del precio del pedido
const tipo = document.getElementById('Tipo');
const precioBase = {
    'Clasica': 5,
    'BBQ': 6,
    'Especial': 7
};
const ingredientesExtra = {
    'Bacon': 1,
    'Queso': 0.5,
    'Huevo': 0.75,
    'Patatas': 1.2
};
const precioTotal = document.createElement('div');
formulario.appendChild(precioTotal);

const calcularPrecio = () => {
    let precio = precioBase[tipo.value] || 5; // Precio base por defecto (Clasica)
    if (tipo.value) {
        for (let ingrediente of ['Bacon', 'Queso', 'Huevo', 'Patatas']) {
            const checkbox = document.getElementById(ingrediente);
            if (checkbox.checked) {
                precio += ingredientesExtra[ingrediente];
            }
        }
    }
    precio *= parseInt(cantidad.value) || 1;  // Multiplicar por la cantidad seleccionada
    precioTotal.textContent = `Total: $${precio.toFixed(2)}`;
};

tipo.addEventListener('change', calcularPrecio);
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', calcularPrecio);
});
cantidad.addEventListener('change', calcularPrecio);

// Cambio de color del botón "Enviar pedido" al pasar el ratón
botonEnviar.addEventListener('mouseover', () => {
    botonEnviar.style.backgroundColor = '#4CAF50';  // Color de fondo al pasar el ratón
    botonEnviar.style.color = 'white';  // Color del texto
});

botonEnviar.addEventListener('mouseout', () => {
    botonEnviar.style.backgroundColor = '';  // Vuelve al color original
    botonEnviar.style.color = '';  // Vuelve al color original
});
