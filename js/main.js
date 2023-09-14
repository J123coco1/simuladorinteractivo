


let primero = prompt("¿Que moneda desea cambiar?  USD/MXN/EUR");
var numerounidades = parseFloat(prompt("¿Cuánto deseas cambiar?"));

//MXN A DIFERENTES MONEDAS USD//EUR
if(primero === "MXN" || primero === "mxn"){
   let pdolar = 0.058;
   let peuro = 0.054;
   dolar = numerounidades * pdolar;
   euro = numerounidades * peuro;
   console.log( "$" + numerounidades + " MXN" + " equivalen a " + "$" + dolar + " USD");
   console.log( "$" + numerounidades + " MXN" + " equivalen a " + "€" + euro + " EUR");
   alert( "$" + numerounidades + " MXN" + " equivalen a " + "$" + dolar + " USD");
   alert( "$" + numerounidades + " MXN" + " equivalen a " + "€" + euro + " EUR");
}

else if( primero === "USD" || primero === "usd") {
    let ppeso = 17.12;
    let peuro = 0.93;
    peso = numerounidades * ppeso;
    euro = numerounidades * peuro;
    
    console.log( "$" + numerounidades + " USD" + " equivalen a " + "$" + peso + " MXN");
    console.log( "$" + numerounidades + " USD" + " equivalen a " + "€" + euro + " EUR");
    alert( "$" + numerounidades + " USD" + " equivalen a " + "$" + peso + " MXN");
    alert( "$" + numerounidades + " USD" + " equivalen a " + "€" + euro + " EUR");
}

else if( primero === "EUR" || primero === "eur") {
    let ppeso = 18.40;
    let pusd = 1.07;
    peso = numerounidades * ppeso;
    usd = numerounidades * pusd;
    
    console.log( "€" + numerounidades + " EUR" + " equivalen a " + "$" + peso + " MXN");
    console.log( "€" + numerounidades + " EUR" + " equivalen a " + "$" + usd + " USD");
    alert( "€" + numerounidades + " EUR" + " equivalen a " + "$" + peso + " MXN");
    alert( "€" + numerounidades + " EUR" + " equivalen a " + "$" + usd + " USD");
}

else {
    alert("Lo sentimos, no se puede realizar la conversion al tipo de moneda especificada :(");
}