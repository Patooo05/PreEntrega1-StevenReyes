

// ternario -- app para validar ususario y contraseña, preguntar si tiene cupon, , que ingrese su numero de pedido, que le efecue el descuento, y le devuela el total.

function mercado (){
let usuario = "steven"
let contraseña = 1234;
let ingresoUsuario = prompt("Ingrese su Usuario");


if (ingresoUsuario !== usuario) {
    console.log("Usuariodenegado. No hay acceso.");
    alert("Usuariodenegado. No hay acceso.")
    return; 
} 


let ingresocontraseña = Number(prompt("Ingrese su contraseña"));

if (ingresocontraseña !== contraseña) {
    console.log("Contraseña denegado. No hay acceso.");
    alert("Contraseña denegado. No hay acceso.")
    return; 
    
} 


let mensaje2 = (ingresoUsuario === usuario) ? "Usuario valido" : "Usuario denegado";
console.log(mensaje2);

let mensaje = (ingresocontraseña === contraseña) ? "Usuario valido" : "Usuario denegado";
console.log(mensaje);


if (mensaje === "Usuario valido") {
    let precioTotal = 0;
    let numeroDePedidos = Number(prompt("¿Cuantos pedidos deseas ingresar?"));

    for (let i = 0; i < numeroDePedidos; i++) {
        let pedido = prompt("Ingresa el numero de pedido:");

        switch (pedido) {
            case "1":
                precioTotal += 250;
                break;
            case "2":
                precioTotal += 500;
                break;
            case "3":
                precioTotal += 750;
                break;
            default:
                alert("No existe ese numero de pedido");
                break;
        }
    }

    let cupon = prompt("¿Tienes un cupon de descuento? (si/no)");
    let precioConDescuento;

    if (cupon === "si") {
        let descuento = 0.20;
        precioConDescuento = precioTotal * (1 - descuento);
        console.log("20% de descuento aprobado");
    } else {
        precioConDescuento = precioTotal;
        console.log("No es valido");
    }
    
    if (precioConDescuento > 1000) {
        console.log("¡Felicidades, tienes un regalo especial!");
    }

    console.log(`El total de tu pedido es de `+ "$" + precioConDescuento + " " + `Gracias por su compra`);
   
    alert(`El total de tu pedido es de `+ "$" + precioConDescuento + " " + `Gracias por su compra`);
   
}

}
mercado();

