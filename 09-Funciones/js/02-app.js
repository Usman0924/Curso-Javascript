//Diferencias entre function expression y declaration
//Declaracion de funcion (function declaration)
sumar();

function sumar(){
    console.log(2+2);
}


sumar2();

//Expresion de funcion (function expression)
const sumar2 = function(){
    console.log(3+3);
}

//JS se ejecuta en 2 vueltas, Hoisting, 
//La pimer vuelta es la de creacion, comienza a leerse, busca las variables y las funciones
//Segunda vuelta es cuando se ejecuta