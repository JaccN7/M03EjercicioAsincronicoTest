function concatenar(param1, param2) {
    var string = "";
    for (i = 0; i < arguments.length; i++) {
        string += arguments[i];
    }
    return string;
}

//------------------------------------------------------------------

function invocarFunciones() {
    let string = "";
    for (i = 0; i < arguments.length; i++) {
        string += arguments[i]();
    }
    return string;
}

function creadorDeIncrementos(numero) {
    return function (numero2) {
        return numero + numero2;
    }
}

//------------------------------------------------------------------

let corte = 0;

function invocacionUnica(func) {
    return function () {
        if (corte == 0) {
            func();
            corte++;
        }
    };
}

//------------------------------------------------------------------

function objetoConClousure() {
    let valor = 0;
    return {
        incremento: function () {
            valor += 1;
            return valor;
        },
        incrementoPor10: function () {
            valor += 10;
            return valor;
        },
        pedirValor: function () {
            return valor;
        },
        cambiarValor: function (otroValor) {
            valor = otroValor;
            return valor;
        },
    };
}

//------------------------------------------------------------------

function ListaDeFuncionesInvitados (arregloInvitados, codigoSecreto) {
    let arreglo = [];
    
    for (let i = 0; i < arregloInvitados.length; i++) {
        //arreglo.push(arregloInvitados[i]);
        arreglo.push(function (codigo) {
            if (codigoSecreto === codigo) {
                return arregloInvitados[i]; 
            } else {
                return 'código secreto: invalido';
            }            
        });
    }
    return arreglo;
}

function armarListaDeInvitados (funcionesInvitados, codigoSecreto) {
    let arreglo1 = [];
    for (let i = 0; i < funcionesInvitados.length; i++) {
        arreglo1.push(funcionesInvitados[i](codigoSecreto));
    }
    return arreglo1;
}