//objetos
const tiposDeCambio = {
    "1": { nombre: "MXN A USD", tasa: 0.058 },
    "2": { nombre: "MXN A EUR", tasa: 0.055 },
    "3": { nombre: "EUR A USD", tasa: 1.07 },
    "4": { nombre: "EUR A MXN", tasa: 18.32 },
    "5": { nombre: "USD A EUR", tasa: 0.94 },
    "6": { nombre: "USD A MXN", tasa: 17.19 }
};

//array
const unidadesDeMoneda = [
    { nombre: "MXN", cantidad: 0 },
    { nombre: "USD", cantidad: 0 },
    { nombre: "EUR", cantidad: 0 }
];




let seguir = true;

while (seguir) {

    console.log("1.- MXN A USD");
    console.log("2.- MXN A EUR");
    console.log("3.- EUR A USD");
    console.log("4.- EUR A MXN");
    console.log("5.- USD A EUR");
    console.log("6.- USD A MXN");

    let respuesta = prompt("Selecciona el número que corresponda al tipo de cambio que deseas: (o presiona 'E' para salir): ");

    if(respuesta.toLowerCase() === "e"){
        seguir = false;
        alert("Que tengas un excelente dia amigo :D")
        alert("Si quieres realizar otra conversion por favor recarga la pagina.")
        continue;
    }



    let unidades = parseFloat(prompt("Cuánto dinero deseas cambiar?"));

    if (isNaN(unidades)) {
        alert("Por favor, ingresa una cantidad valida para realizar el cambio de divisas :D ");
    } else {
        let tipoCambio = tiposDeCambio[respuesta];

        if (tipoCambio) {
            let cambio = unidades * tipoCambio.tasa;
            alert("$" + unidades + " es igual a " + tipoCambio.nombre + ": " + cambio.toFixed(2));
          } else {
            alert("El tipo de cambio que elegiste no es válido, inténtalo de nuevo :D");
        }
    }

}

// / <script src="/js/main.js"></script>