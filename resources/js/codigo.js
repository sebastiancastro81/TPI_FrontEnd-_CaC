// Traer elementos del DOM




const precioEntrada = 200;
const opcionElement = document.getElementById("selectCategoria");
const cantidadElement = document.getElementById("inputCantidad");
const btnResumen = document.getElementById("btnResumen");
const btnBorrar = document.getElementById("btnBorrar");
const formulario = document.getElementById("formulario");
let totalElement = document.getElementById("textTotalAPagar");

// const questionElement = document.querySelector("#question");

btnResumen.addEventListener("click", () => {
opcion = opcionElement.value;
cantidad = parseInt(cantidadElement.value);

switch(opcion){
    case "1":
        var descuento = 0.8;
        break
    case "2":
        var descuento = 0.5;
        break
    case "3":
        var descuento = 0.15;
        break
}


totalElement.textContent = "Total a Pagar: $" + ((precioEntrada - (precioEntrada * descuento)) * cantidad);


});
btnBorrar.addEventListener("click", () => {
    console.log("Borrar formulario")
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellido').value = '';
    document.getElementById('inputEmail').value = '';
    cantidadElement.value = '';
    opcionElement.selectedIndex = 0; 
    totalElement.textContent = "Total a Pagar: $"
});