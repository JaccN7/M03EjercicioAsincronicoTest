//Se instancio un objeto de la clase CalculadoraNPI en linea 10 constructoresSpecs.js
//Crear clase CalculadoraNPI
let array = [];

class CalculadoraNPI {

    agregar(numero) {
        //Comprobar si es que el array tenia un resultado de una operacion anterior 
        if (array.length === 3) {
            array.shift();
        }
        array.push(numero);
    }

    //Al usar notación polaca inversa se usa una estructura de tipo LIFO (el útlimo que entro al arreglo será el primero en salir)

    sumar() {
        var sumar = 0;
        if (array.length < 2) {
            throw ('La calculadoraNPI necesita por lo menos 2 números');
        } else {
            sumar += array.pop();
            sumar += array.pop();
            array.push(sumar);
        }
    }


    restar() {
        var restar = 0;
        if (array.length < 2) {
            throw ('La calculadoraNPI necesita por lo menos 2 números');
        } else {
            restar -= array.pop();
            restar += array.pop();
            array.push(restar);
        };
    }

    multiplicar() {
        var multiplicar = 0;
        if (array.length < 2) {
            throw ('La calculadoraNPI necesita por lo menos 2 números');
        } else {
            multiplicar += array.pop();
            multiplicar *= array.pop();
            array.push(multiplicar);
        };
    }

    dividir() {
        var dividir = 0;
        if (array.length < 2) {
            throw ('La calculadoraNPI necesita por lo menos 2 números');
        } else {
            /*  De esta manera la operacion queda al revés
            dividir += array.pop();
            dividir /= array.pop(); */
            var divisor = array.pop();
            var dividendo = array.pop();
            dividir = dividendo / divisor;
            array.push(dividir);
        };
    }


    valor() {
        return array[array.length-1];
    }
}
