const tiposDeCambio = [
    { id: "1", nombre: "MXN A USD", tasa: 0.058 },
    { id: "2", nombre: "MXN A EUR", tasa: 0.055 },
    { id: "3", nombre: "EUR A USD", tasa: 1.07 },
    { id: "4", nombre: "EUR A MXN", tasa: 18.32 },
    { id: "5", nombre: "USD A EUR", tasa: 0.94 },
    { id: "6", nombre: "USD A MXN", tasa: 17.19 }
];

const unidadesDeMoneda = [
    { nombre: "MXN", cantidad: 0 },
    { nombre: "USD", cantidad: 0 },
    { nombre: "EUR", cantidad: 0 }
];

function convertirDivisas(cantidad, tipoCambio) {
    return cantidad * tipoCambio.tasa;
}

function realizarConversion() {
    console.log("1.- MXN A USD");
    console.log("2.- MXN A EUR");
    console.log("3.- EUR A USD");
    console.log("4.- EUR A MXN");
    console.log("5.- USD A EUR");
    console.log("6.- USD A MXN");

    let respuesta = prompt("Selecciona el número que corresponda al tipo de cambio que deseas: (o presiona 'E' para salir): ");

    if (respuesta.toLowerCase() === "e") {
        alert("Que tengas un excelente día amigo :D");
        alert("Si quieres realizar otra conversión, por favor recarga la página.");
        return false;
    }

    let unidades = parseFloat(prompt("Cuánto dinero deseas cambiar?"));

    if (isNaN(unidades)) {
        alert("Por favor, ingresa una cantidad válida para realizar el cambio de divisas :D ");
        return true;
    } else {
        let tipoCambio = tiposDeCambio.find(cambio => cambio.id === respuesta);

        if (tipoCambio) {
            let cambio = convertirDivisas(unidades, tipoCambio);
            alert("$" + unidades + " es igual a " + tipoCambio.nombre + ": " + cambio.toFixed(2));
        } else {
            alert("El tipo de cambio que elegiste no es válido, inténtalo de nuevo :D");
        }

        return true;
    }
}

let seguir = true;

while (seguir) {
    seguir = realizarConversion();
}