function crearCalculadora(){
    var resultado = 0;
    var calculadora = {
        valor: function (){
            return resultado;
        },
        sumar: function (a){
            resultado += a;
        },
        restar: function(a){
            resultado -= a;
        },
        reset: function(){
            resultado = 0;
        }
    };
    return calculadora;
}