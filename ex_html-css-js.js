// 1. Modo claro/oscuro
const botonModo = document.getElementById('oscuro');
const body = document.body;

botonModo.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');  // Alterna la clase "modo-oscuro" en el <body>
    if (body.classList.contains('modo-oscuro')) {
        botonModo.textContent = 'Modo claro';  // Cambia el texto del botón
    } else {
        botonModo.textContent = 'Modo oscuro';  // Cambia el texto del botón
    }
});

// 2. Validación del formulario
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const telefonoInput = document.getElementById('Telefono');
const emailInput = document.getElementById('Email');
const direccionInput = document.getElementById('Direeccion');
const botonSubmit = document.getElementById('boton');
const mensajeError = document.createElement('p');
mensajeError.style.color = 'red';
formulario.appendChild(mensajeError);

// Función de validación
formulario.addEventListener('submit', (e) => {
    let errores = [];

    // Validar nombre
    if (!nombreInput.value.trim()) {
        errores.push('El nombre es obligatorio.');
    }

    // Validar teléfono (debe ser numérico y mínimo 9 dígitos)
    const telefono = telefonoInput.value.trim();
    if (!telefono || telefono.length < 9 || isNaN(telefono)) {
        errores.push('El teléfono debe contener al menos 9 dígitos numéricos.');
    }

    // Validar email (debe contener @)
    const email = emailInput.value.trim();
    if (!email.includes('@')) {
        errores.push('El email debe contener "@"');
    }

    // Validar dirección (debe tener al menos 5 caracteres)
    if (direccionInput.value.trim().length < 5) {
        errores.push('La dirección debe tener al menos 5 caracteres.');
    }

    // Si hay errores, evitar el envío y mostrar mensaje de error
    if (errores.length > 0) {
        e.preventDefault();
        mensajeError.textContent = errores.join(' ');
    } else {
        mensajeError.textContent = '';
    }
});

// 3. Contador de caracteres en instrucciones adicionales
const instruccionesInput = document.getElementById('Instrucciones');
const contadorCaracteres = document.createElement('p');
formulario.appendChild(contadorCaracteres);

instruccionesInput.addEventListener('input', () => {
    const caracteresEscritos = instruccionesInput.value.length;
    contadorCaracteres.textContent = `Caracteres: ${caracteresEscritos}/200`;
    if (caracteresEscritos > 200) {
        instruccionesInput.value = instruccionesInput.value.slice(0, 200);  // Limita a 200 caracteres
    }
});

// 4. Confirmación antes de enviar el pedido
formulario.addEventListener('submit', (e) => {
    if (!mensajeError.textContent) {
        const confirmacion = confirm('¿Estás seguro de que deseas enviar el pedido?');
        if (!confirmacion) {
            e.preventDefault();  // Cancela el envío si el usuario no confirma
        }
    }
});

// 5. Cálculo del precio del pedido
const selectCantidad = document.getElementById('Cantidad');
const selectTipo = document.getElementById('Tipo');
const checkBacon = document.getElementById('Bacon');
const checkQueso = document.getElementById('Queso');
const checkHuevo = document.getElementById('Huevo');
const checkPatatas = document.getElementById('Patatas');
const totalPrecio = document.createElement('p');
formulario.appendChild(totalPrecio);

   

