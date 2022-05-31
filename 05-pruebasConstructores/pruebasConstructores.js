let array = [];

class CalculadoraNPI {

    agregar(numero) {
        if (array.length === 3) {
            var numeroAnterior = array.shift();
            console.log("El array contenia un resultado anterior " + numeroAnterior);
        }
        console.log("Se agrego el numero " + numero);
        array.push(numero);
        console.log("El nuevo array es " + array);
    }

    sumar(){
        var sumar = 0;
        if (array.length < 2) {
            throw ('La calculadoraNPI necesita por lo menos 2 números');
        } else {
        sumar+= array.pop();
        console.log("Valor suma: " + sumar);
        sumar+= array.pop();
        console.log("Valor suma: " + sumar);
        array.push(sumar);
        console.log("El nuevo array es: " + array);
        }
    }

    restar() {
        var restar = 0;
        if (array.length < 2) {
            throw ('La calculadoraNPI necesita por lo menos 2 números');
        } else {
            restar -= array.pop();
            console.log("Valor resta: " + restar);
            restar += array.pop();
            console.log("Valor resta: " + restar);
            array.push(restar);
            console.log("El nuevo array es: " + array);
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
            let divisor = array.pop();
            let dividendo = array.pop();
            dividir = dividendo / divisor;
            array.push(dividir);
        };
    }

    valor() {
        console.log("Valores en Array: " + array);
        console.log("Tamaño del array: " + array.length);
        return array[array.length-1]
    }
}

var calculadora = new CalculadoraNPI();
console.log("Prueba sumar 2 números")
calculadora.agregar(2);
calculadora.agregar(3);
console.log("Comenzar operación");
calculadora.sumar();
console.log("\nVer resultado en valor()");
calculadora.valor();
console.log("Fin primera operacion\n");

console.log("Prueba sumar 3 números");
calculadora.agregar(2);
calculadora.agregar(3);
calculadora.agregar(4);
console.log("\nComenzar operación");
calculadora.sumar();
console.log("\nVer resultado en valor()")
calculadora.valor();
console.log("Fin  primera suma\n");

calculadora.sumar();
console.log("\nVer resultado en valor()")
calculadora.valor();
console.log("Fin sumar 3 números\n");

console.log("Prueba restar 2 números");
calculadora.agregar(2);
calculadora.agregar(3);
console.log("\nComenzar operación");
calculadora.restar();
console.log("\nVer resultado en valor()")
calculadora.valor();
console.log("Fin Restar con 2 números\n");

console.log("Prueba Suma y Resta");
calculadora.agregar(2);
calculadora.agregar(3);
calculadora.agregar(4);
console.log("\nComenzar primera operación (Resta)");
calculadora.restar();
console.log("\nVer resultado en valor()")
calculadora.valor();
console.log("\nComenzar segunda operación (Suma)");
calculadora.sumar();
console.log("\nVer resultado en valor()")
calculadora.valor();
console.log("Fin Suma y Resta\n");

console.log("Prueba Multiplicación y división");
calculadora.agregar(2);
calculadora.agregar(3);
calculadora.agregar(4);
console.log("\nComenzar primera operación (División)");
calculadora.dividir();
console.log("\nVer resultado en valor()")
calculadora.valor();
console.log("\nComenzar segunda operación (Multiplicación)");
calculadora.multiplicar();
console.log("\nVer resultado en valor()")
calculadora.valor();
console.log("Fin Multiplicación y división");