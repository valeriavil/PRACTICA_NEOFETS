// ABRIR Y CERRAR MENÚ EN CELULAR
function mostrarMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("activo");
}

// MOSTRAR PROMOCIÓN
function mostrarPromo() {
    alert("🎉 Promoción especial: Compra tu boleto hoy y recibe 20% de descuento.");
}

// SELECCIONAR BOLETO
function seleccionarBoleto(tipo) {
    document.getElementById("boletoSeleccionado").innerHTML =
        "Has seleccionado el boleto: " + tipo;
}

// REGISTRO DEL FORMULARIO
function registrarUsuario(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let zona = document.getElementById("zona").value;

    document.getElementById("respuesta").innerHTML =
        "✅ Gracias " + nombre +
        ", tu registro fue enviado. Tu zona favorita es: " + zona;

    document.querySelector(".formulario").reset();
}
