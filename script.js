// Cambiar el color de fondo de la página al hacer clic en el botón
function cambiarFondo() {
    document.body.style.backgroundColor = "lightblue";
}

// Mostrar una alerta cuando el usuario hace clic en un enlace
function mostrarAlerta() {
    alert("¡Has hecho clic en el enlace!");
}

// Función para mostrar/ocultar el subíndice de "Mis Gustos"
function toggleSubindice() {
    const subindice = document.querySelector('.subindice');
    subindice.style.display = subindice.style.display === 'block' ? 'none' : 'block';
}

// Cambiar el color de los títulos h1, h2, h3 al pasar el ratón por encima
const titulos = document.querySelectorAll("h1, h2, h3");
titulos.forEach(titulo => {
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'blue';  // Cambia el color al pasar el ratón
    });
    titulo.addEventListener('mouseout', () => {
        titulo.style.color = 'red';  // Vuelve al color original cuando se quita el ratón
    });
});

// Ejecutar la función de alerta cuando se hace clic en un enlace específico
document.getElementById("enlaceBienvenida").onclick = mostrarAlerta;