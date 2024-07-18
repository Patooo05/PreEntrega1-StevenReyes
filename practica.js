function mercado() {
    let ingresoUsuario = prompt("Ingrese su Usuario");
    
    let usuarios = [
        { nombre: 'steven', contrasena: '1234' },
        { nombre: 'sofia', contrasena: '5678' },
        { nombre: 'pepe', contrasena: '4321' }
    ];
    
    let usuarioEncontrado = usuarios.find(usuario => usuario.nombre === ingresoUsuario);
    
    if (!usuarioEncontrado || prompt("Ingrese su contraseña") !== usuarioEncontrado.contrasena) {
        console.log("Usuario o contraseña incorrectos. No hay acceso.");
        alert("Usuario o contraseña incorrectos. No hay acceso.");
    } else {
        console.log("Acceso concedido. Bienvenido, " + ingresoUsuario + "!");
        alert("Acceso concedido. Bienvenido, " + ingresoUsuario + "!");
        
        let precioTotal = 0;
        let numeroDePedidos = Number(prompt("¿Cuántos pedidos deseas ingresar?"));

        for (let i = 0; i < numeroDePedidos; i++) {
            let pedido = prompt("Ingresa el número de pedido:");

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
                    alert("No existe ese número de pedido");
                    break;
            }
        }

        let cupon = prompt("¿Tienes un cupón de descuento? (si/no)").toLowerCase();
        let precioConDescuento;

        if (cupon === "si") {
            let descuento = 0.20;
            precioConDescuento = precioTotal * (1 - descuento);
            console.log("20% de descuento aprobado");
        } else if (cupon === "no") {
            precioConDescuento = precioTotal;
            console.log("No es válido");
        } else {
            alert("Respuesta inválida. Asumiendo que no tienes cupón.");
            precioConDescuento = precioTotal;
        }

        if (precioConDescuento > 1000) {
            console.log("¡Felicidades, tienes un regalo especial!");
        }

        console.log(`El total de tu pedido es de $${precioConDescuento}. Gracias por su compra.`);
        alert(`El total de tu pedido es de $${precioConDescuento}. Gracias por su compra.`);
    }
}

mercado();
