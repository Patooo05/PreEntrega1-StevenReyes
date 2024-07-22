




// preguntar si tiene cuenta - registrar el usuario, que el  ususario inicie session, que ingrese que que producto quiere en base a su ID , preguntar si quiere agregar otro producto, calcular el  precio total de su pedido, preguntar si tiene cupon de descuento y que ingrese el numero de serie del cupon, fijarse si si es valido, aplicar descuento, 





let usuarios = [
    { usuario: "steven", contrasena: "12345", correo: "st@gmail" },
    { usuario: "sofia", contrasena: "12345", correo: "sf@gmail" },
    { usuario: "orion", contrasena: "12345", correo: "or@gmail" }
];

let productos = [
    { 
    id: 1, 
    nombre: "La Baiconada", 
    descripcion: "Patata Roll, queso cheddar, bacon ahumado, blend deternera smash.", 
    precio: 380 
    },
    { 
    id: 2, 
    nombre: "Homenaje al Big M.", 
    descripcion: "Salsa Big Mc, pepinillos, lechuga, cebolla, quesocheddar.", 
    precio: 420 },
    { 
    id: 3, 
    nombre: "Cabrona", 
    descripcion: "Alioli de aguacate, jamón serrano, queso cheddar.",precio: 390 
    },
    { 
    id: 4, 
    nombre: "Dios", 
    descripcion: "Cebolla secreta, blend de ternera, salsa BBQ, quesocheddar", 
    precio: 420 
    },
    { 
    id: 5, 
    nombre: "Emmily", 
    descripcion: "Blend de ternera, salsa emmily, queso cheddar",precio: 420 
    },
    { 
    id: 6, 
    nombre: "Epicarda", 
    descripcion: "blend de ternera, cebolla caramelizada, rúcula.",precio: 390 
    },
    { 
    id: 7, 
     nombre: "Gringa", 
    descripcion: "Cebolla frita, blend de ternera, salsa BBQ ahumada,queso cheddar", 
    precio: 390 
    },
    { 
    id: 8, 
    nombre: "Vieja y confiable", 
    descripcion: "Queso cheddar, blend de ternera, patata roll.",precio: 390 
    },
    { 
    id: 9, 
    nombre: "Wunder", 
    descripcion: "Cebolla morada, blend de ternera, salsa BBQ, quesoazul, alioli de setas.", precio: 390 
    }
];
function saludar0 (){
    console.log(". BIENVENIDO A BURGER ONE .");
    alert(". BIENVENIDO A BURGER ONE .");
}
saludar0()

function saludar (){
    console.log(" - NUESTRA CARTA - ");
    alert (" - NUESTRA CARTA - ");
}
saludar();

function mostrarProductos() {
    productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}`);
    });
}
mostrarProductos();

let cuponesValidos = ["2222", "3333"];

function pregCuenta() {
    let tieneCuenta = prompt("¿Ya tienes cuenta? (si/no)").toLowerCase() === "si";
    if (tieneCuenta) {
        iniciarSesion();
    } else {
        registrarUsuario();
    }
}

function registrarUsuario() {  
    const nombreUsuario = prompt("Ingrese su usuario para registrarse:");
    const contrasena = prompt("Ingrese su contraseña para registrarse:");
    const correo = prompt("Ingrese su correo electrónico para registrarse:");

    if (nombreUsuario && contrasena && correo) {
        usuarios.push({ usuario: nombreUsuario, contrasena: contrasena, correo: correo });
        console.log("Usuario registrado exitosamente.");
        iniciarSesion(); 
    } else {
        console.log("Entrada no válida. Por favor, intente de nuevo.");
    }
}

function iniciarSesion() {
    const nombreUsuario = prompt("Iniciar sesión. Ingrese su nombre de usuario:");
    const contrasena = prompt("Ingrese su contraseña:");

    const usuario = usuarios.find(
        usuario => usuario.usuario === nombreUsuario && usuario.contrasena === contrasena
    );

    if (usuario) {
        console.log("Inicio de sesión exitoso. Bienvenido, " + nombreUsuario + "!");
        mercado();
    } else {
        console.log("Nombre de usuario o contraseña incorrectos. Por favor, intente de nuevo.");
        let intentarDeNuevo = prompt("¿Desea intentar de nuevo? (si/no)").toLowerCase() === "si";
        if (intentarDeNuevo) {
            iniciarSesion();
        }
    }
}

function agregarProductoAlCarrito(carrito, idProducto) {
    let producto = productos.find(producto => producto.id === idProducto);

    if (producto) {
        carrito.push(producto);
        console.log(`Producto agregado al carrito: ${producto.nombre} - Precio: $${producto.precio}`);
    } else {
        console.log("Producto no encontrado. Intente de nuevo.");
    }
}

function aplicarCupon(precioTotal) {
    let tieneCupon = prompt("¿Tienes un cupón de descuento? (si/no)").toLowerCase() === "si";
    let precioConDescuento = precioTotal;

    if (tieneCupon) {
        let cupon = prompt("Ingrese el número de serie del cupón:");
        if (cuponesValidos.includes(cupon)) {
            let descuento = 0.20;
            precioConDescuento = precioTotal * (1 - descuento);
            console.log("Cupón válido. 20% de descuento aplicado.");
        } else {
            console.log("Cupón inválido. No se aplicó descuento.");
        }
    }

    return precioConDescuento;
}

function calcularTotal(carrito) {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

function mercado() {
    let carrito = [];
    let continuar = true;

    while (continuar) {
        let opcion = prompt("¿Qué desea hacer? (1: Comprar, 2: Filtrar productos, 3: Agregar producto)").trim();
        switch(opcion) {
            case '1':
                let idProducto = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
                agregarProductoAlCarrito(carrito, idProducto);
                break;
            case '2':
                let precioFiltro = parseFloat(prompt("Ingrese el precio mínimo para filtrar los productos:"));
                let productosFiltrados = filtrarProductosPorPrecio(precioFiltro);
                console.log("Productos filtrados:", productosFiltrados);
                break;
            case '3':
                agregarProducto();
                break;
            default:
                console.log("Opción no válida.");
        }
        continuar = prompt("¿Desea realizar otra acción? (si/no)").toLowerCase() === "si";
    }

    let precioTotal = calcularTotal(carrito);
    let precioConDescuento = aplicarCupon(precioTotal);

    if (precioConDescuento > 1000) {
        console.log("¡Felicidades, tu gasto fue mayor a $1000 y tienes un regalo especial!");
    }

    console.log(`El total de tu pedido es de $${precioConDescuento}. Gracias por su compra.`);
    alert(`El total de tu pedido es de $${precioConDescuento}. Gracias por su compra.`);
}

function filtrarProductosPorPrecio(precio) {
    return productos.filter(producto => producto.precio > precio);
   
    
}
console.log(filtrarProductosPorPrecio)

function agregarProducto() {
    const id = productos.length + 1;
    const nombre = prompt("Ingrese el nombre del producto:");
    const descripcion = prompt("Ingrese la descripción del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (nombre && descripcion && !isNaN(precio)) {
        productos.push({ id, nombre, descripcion, precio });
        console.log(`Producto agregado exitosamente: ${id} ${nombre} - Precio: $${precio}`);
        alert(`Producto agregado exitosamente: ${nombre} - Precio: $${precio}`);
    } else {
        console.log("Entrada no válida. Por favor, intente de nuevo.");
        alert("Entrada no válida. Por favor, intente de nuevo.");
    }

  
    let continuar = prompt("¿Desea realizar otra acción? (si/no)").toLowerCase() === "si";
    if (continuar) {
        mercado();
    } else {
        console.log("La acción ha finalizado.");
        alert("La acción ha finalizado.");
    }
    mostrarProductos();
}

pregCuenta();