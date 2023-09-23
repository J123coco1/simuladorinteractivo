console.log("1.- MXN A USD");
console.log("2.- MXN A EUR");
console.log("3.- EUR A USD");
console.log("4.- EUR A MXN");
console.log("5.- USD A EUR");
console.log("6.- USD A MXN");

let respuesta = prompt("Selecciona el número que corresponda al tipo de cambio que deseas: ");
let unidades = parseFloat(prompt("Cuánto dinero deseas cambiar?"));

if (isNaN(unidades)) {
    alert("Por favor, ingresa una cantidad valida para realizar el cambio de divisas :D ");
} else {
    let change;

    switch (respuesta) {
        case "1":
            let dolaraMXN = 0.058;
            change = unidades * dolaraMXN;
            alert("$" + unidades + " es igual a " + "$" + change.toFixed(2) + " dólares.");
            break;
        case "2":
            let euroaMXN = 0.055;
            change = unidades * euroaMXN;
            alert("$" + unidades + " es igual a " + "€" + change.toFixed(2) + " euros.");
            break;
        case "3":
            let euroaUSD = 1.07;
            change = unidades * euroaUSD;
            alert("€" + unidades + " es igual a " + "$" + change.toFixed(2) + " dólares.");
            break;
        case "4":
            let pesoaEuro = 18.32;
            change = unidades * pesoaEuro;
            alert("$" + unidades + " es igual a " + "€" + change.toFixed(2) + " euros.");
            break;
        case "5":
            let usdaEuro = 0.94;
            change = unidades * usdaEuro;
            alert("$" + unidades + " es igual a " + "€" + change.toFixed(2) + " euros.");
            break;
        case "6":
            let usdaMXN = 17.19;
            change = unidades * usdaMXN;
            alert("$" + unidades + " es igual a " + "$" + change.toFixed(2) + " pesos.");
            break;
        default:
            alert("El tipo de cambio que elegiste no es válido, inténtalo de nuevo :D");
            break;
    }
}
