console.log("hola mundo");
console.log(10+10);

function msj(){
    console.log("mensaje de funcion");
}

msj();

function msj1(msj){
    console.log(msj);
}

var msj = "mensaje como argumento de funcion";
msj1(msj);

function msj2(){
    return "mensaje como return de una funcion";
}

var msj1 =msj2();
console.log(msj1);

/**** funcion recursiva */

var factorial = function(n){
    if((n == 0) || (n ==1 ))
        return 1;
    else
        return (n*factorial(n - 1));
}

console.log(factorial(5));