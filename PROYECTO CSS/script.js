// Función para abrir y cerrar el menú móvil
// JavaScript distingue mayúsculas y minúsculas

function abrirMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("activo");
}