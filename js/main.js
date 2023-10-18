document.addEventListener("DOMContentLoaded", function () {
   
    const tiposDeCambio = [
        { id: "1", origen: "MXN", destino: "USD", tasa: 0.058 },
        { id: "2", origen: "MXN", destino: "EUR", tasa: 0.055 },
        { id: "3", origen: "EUR", destino: "USD", tasa: 1.07 },
        { id: "4", origen: "EUR", destino: "MXN", tasa: 18.32 },
        { id: "5", origen: "USD", destino: "EUR", tasa: 0.94 },
        { id: "6", origen: "USD", destino: "MXN", tasa: 17.19 }
    ];

    const radioInputs = document.querySelectorAll('.radio-input');
    const valorInput = document.querySelector('.valor');
    const convertirButton = document.querySelector('.convertir');

    convertirButton.addEventListener('click', function () {
        let origen, destino;
        for (const radioInput of radioInputs) {
            if (radioInput.checked) {
                if (radioInput.name === "origen") {
                    origen = radioInput.value;
                } else if (radioInput.name === "destino") {
                    destino = radioInput.value;
                }
            }
        }

        if (!origen || !destino) {
            Swal.fire('Por favor, selecciona las monedas de origen y destino.');
            return;
        }

        const valor = parseFloat(valorInput.value);

        if (isNaN(valor)) {
            Swal.fire('Ingresa un valor numérico válido.')
            return;
        }

        const tipoCambio = tiposDeCambio.find(cambio => cambio.origen === origen && cambio.destino === destino);

        if (!tipoCambio) {
            Swal.fire('No se encontró un tipo de cambio válido.')
            return;
        }
 
        const resultado = valor * tipoCambio.tasa;
        Swal.fire(`El resultado de la conversion es:  $ ${resultado.toFixed(2)}`) 
    });
});
